import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createElement as h } from "react";
import { ImageResponse } from "next/og.js";
import { profile, shareImage } from "../data/site.js";

// Existing Google Fonts, fetched only when regenerating this static image.
// No font or rendering dependency is added to the client bundle.
const fontSources = [
  { name: "Inter", weight: 400, url: "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZg.ttf" },
  { name: "Cormorant Garamond", weight: 500, url: "https://fonts.gstatic.com/s/cormorantgaramond/v21/co3umX5slCNuHLi8bLeY9MK7whWMhyjypVO7abI26QOD_s06GnM.ttf" }
];
const fonts = [];
for (const { name, weight, url } of fontSources) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Cannot fetch ${name}: ${response.status}`);
  fonts.push({ name, weight, style: "normal", data: await response.arrayBuffer() });
}
const portrait = `data:image/png;base64,${(await readFile(`public${profile.portrait}`)).toString("base64")}`;
const logo = `data:image/jpeg;base64,${(await readFile("public/legacy/assets/samuel-alonge-profile.jpg")).toString("base64")}`;
const tree = h("div", { style: { width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: "48px 56px", background: "#f7f5f1", color: "#111111", fontFamily: "Inter", letterSpacing: 0 } },
  h("div", { style: { display: "flex", alignItems: "center", gap: 18 } },
    h("img", { src: logo, width: 56, height: 56, alt: "Crystal Stairs Ltd" }),
    h("div", { style: { display: "flex", flexDirection: "column", gap: 7 } },
      h("span", { style: { fontSize: 23 } }, "Crystal Stairs Ltd"),
      h("span", { style: { fontSize: 14, color: "#8e4e3f" } }, "Architecture Consulting"))),
  h("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", flex: 1, gap: 36 } },
    h("div", { style: { display: "flex", flexDirection: "column", width: 670 } },
      h("span", { style: { fontSize: 21, color: "#8e4e3f", marginBottom: 12 } }, "Architect"),
      h("span", { style: { fontFamily: "Cormorant Garamond", fontWeight: 500, fontSize: 86, lineHeight: 1.05 } }, "Samuel Alonge"),
      h("span", { style: { marginTop: 26, fontSize: 27, lineHeight: 1.45, maxWidth: 600 } }, "Architecture consulting for buildings that must carry meaning.")),
    h("img", { src: portrait, alt: "Architect Samuel Alonge", width: 350, height: 346, style: { objectFit: "contain" } })),
  h("div", { style: { display: "flex", borderTop: "1px solid #c6a978", paddingTop: 22, fontSize: 16, color: "#6f6f68" } }, "architect-samuel-alonge.vercel.app"));
const response = new ImageResponse(tree, { width: shareImage.width, height: shareImage.height, fonts });
await mkdir("public/images", { recursive: true });
await writeFile(`public${shareImage.src}`, Buffer.from(await response.arrayBuffer()));
console.log(`Generated public${shareImage.src}: ${shareImage.width} x ${shareImage.height}`);
