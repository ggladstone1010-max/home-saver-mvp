import { getPropertyById } from "@/lib/properties/propertyService";

export async function GET(
  _request: Request,
  { params }: RouteContext<"/api/properties/[id]">,
) {
  try {
    const { id } = await params;
    const property = await getPropertyById(id);
    return property
      ? Response.json({ property })
      : Response.json({ error: "NOT_FOUND" }, { status: 404 });
  } catch (error) {
    console.error("[property] Supabase read failed:", error);
    const detail = error instanceof Error ? error.message : String(error);
    return Response.json(
      {
        error: "PROPERTY_BACKEND_UNAVAILABLE",
        ...(process.env.NODE_ENV === "development" ? { detail } : {}),
      },
      { status: 503 },
    );
  }
}
