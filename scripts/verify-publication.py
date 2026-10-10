"""Check real HTTP responses with standard-library HTML/XML parsers. No messages sent."""

import argparse
from html.parser import HTMLParser
import json
import struct
from urllib.error import HTTPError
from urllib.parse import urljoin
from urllib.request import Request, urlopen
import xml.etree.ElementTree as ET

PRODUCTION = "https://architect-samuel-alonge.vercel.app"
PATHS = ["/", "/projects", "/projects/dunamis-glory-dome", "/about-us", "/people"]


class PageHead(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.meta = {}
        self.canonical = None
        self.script_type = None
        self.json_ld = []
        self.script_text = ""
        self.visible = []
        self.hidden = 0

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "meta":
            self.meta[attrs.get("name") or attrs.get("property")] = attrs.get("content", "")
        if tag == "link" and attrs.get("rel") == "canonical":
            self.canonical = attrs.get("href")
        if tag in ("script", "style"):
            self.hidden += 1
        if tag == "script":
            self.script_type = attrs.get("type")
            self.script_text = ""

    def handle_endtag(self, tag):
        if tag == "script":
            if self.script_type == "application/ld+json":
                self.json_ld.append(json.loads(self.script_text))
            self.script_type = None
        if tag in ("script", "style"):
            self.hidden = max(0, self.hidden - 1)

    def handle_data(self, data):
        if self.script_type == "application/ld+json":
            self.script_text += data
        if not self.hidden:
            self.visible.append(data)


def fetch(base, path):
    request = Request(urljoin(base + "/", path), headers={"User-Agent": "CrystalStairsReleaseCheck/1.0"})
    with urlopen(request, timeout=60) as response:
        assert response.status == 200, path
        return response.headers, response.read()


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("base", nargs="?", default="http://localhost:3012")
    parser.add_argument("--preview", action="store_true")
    args = parser.parse_args()
    for path in PATHS:
        headers, data = fetch(args.base, path)
        page = PageHead()
        page.feed(data.decode("utf-8"))
        expected = urljoin(PRODUCTION + "/", path)
        assert page.canonical.rstrip("/") == expected.rstrip("/"), (path, "canonical", page.canonical)
        assert page.meta["og:url"].rstrip("/") == expected.rstrip("/"), (path, "og:url")
        assert page.meta["og:image"] == PRODUCTION + "/images/share-image.png", (path, "og:image")
        assert page.meta["og:image:width"] == "1200"
        assert page.meta["og:image:height"] == "630"
        assert page.meta["twitter:image"] == page.meta["og:image"]
        robots = page.meta.get("robots", "").lower()
        if args.preview:
            assert "noindex" in robots and "nofollow" in robots, (path, robots)
        else:
            assert "index" in robots and "follow" in robots, (path, robots)
            assert "noindex" not in robots and "nofollow" not in robots, (path, robots)
            assert "noindex" not in headers.get("X-Robots-Tag", "").lower(), path
            assert "nofollow" not in headers.get("X-Robots-Tag", "").lower(), path
        assert page.meta.get("description"), path
        assert any(item.get("@type") == "ProfessionalService" for item in page.json_ld), path
        text = " ".join(page.visible)
        assert "TODO" not in text and "Insights & Advisory" not in text, path
        if path == "/":
            assert "Approach" in text
        print(f"{path}: 200; indexing, canonical, OG/Twitter, JSON-LD and visible-copy checks pass")

    headers, image = fetch(args.base, "/images/share-image.png")
    assert "image/png" in headers.get("Content-Type", "")
    assert image[:8] == b"\x89PNG\r\n\x1a\n"
    assert struct.unpack(">II", image[16:24]) == (1200, 630)
    _, robots_bytes = fetch(args.base, "/robots.txt")
    robots = robots_bytes.decode("utf-8")
    assert f"Sitemap: {PRODUCTION}/sitemap.xml" in robots
    if args.preview:
        assert "Disallow: /\n" in robots and "Allow: /" not in robots
    else:
        assert "Allow: /" in robots and "Disallow: /\n" not in robots
    _, sitemap = fetch(args.base, "/sitemap.xml")
    root = ET.fromstring(sitemap)
    urls = {element.text for element in root.findall("{*}url/{*}loc")}
    assert urls == {urljoin(PRODUCTION + "/", path) for path in PATHS}, urls
    for path in ["/profile", "/studio"]:
        try:
            fetch(args.base, path)
        except HTTPError as error:
            assert error.code == 404, (path, error.code)
        else:
            raise AssertionError(f"Unexpected route: {path}; retained routes are /about-us and /people")
    print("Share image: 1200 x 630 PNG; robots/sitemap and retained route names verified.")


if __name__ == "__main__":
    main()
