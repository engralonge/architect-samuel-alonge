import { consultationTypes } from "@/data/site";

export async function POST(request) {
  let input;
  try {
    input = request.headers.get("content-type")?.includes("application/json")
      ? await request.json()
      : Object.fromEntries(await request.formData());
  }
  catch { return Response.json({ error: "Please submit a valid enquiry." }, { status: 400 }); }
  const limits = { name: 120, contact: 200, location: 200, projectType: 100, message: 5000 };
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return Response.json({ error: "Please submit a valid enquiry." }, { status: 400 });
  }
  for (const [key, limit] of Object.entries(limits)) {
    const value = input[key];
    if ((key !== "location" && (typeof value !== "string" || !value.trim())) ||
        (value !== undefined && (typeof value !== "string" || value.length > limit))) {
      return Response.json({ error: "Please check the required fields and message length." }, { status: 400 });
    }
  }
  if (!consultationTypes.includes(input.projectType)) {
    return Response.json({ error: "Please select a project type." }, { status: 400 });
  }
  // TODO: connect the owner-approved inbox, add delivery protection and test receipt.
  // Do not store, log, or claim delivery while the destination is unconfigured.
  return Response.json({ error: "Online enquiries are not connected yet. Please contact Crystal Stairs Ltd on Instagram." }, { status: 503 });
}
