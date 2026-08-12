import { getActiveProperties } from "@/lib/properties/propertyService";

function describeError(error: unknown) {
  if (error instanceof Error) return error.message;
  if (typeof error === "object" && error !== null) {
    const value = error as Record<string, unknown>;
    return [value.code, value.message, value.details, value.hint]
      .filter(Boolean)
      .join(" · ");
  }
  return String(error);
}

export async function GET() {
  try {
    return Response.json({ properties: await getActiveProperties() });
  } catch (error) {
    const detail = describeError(error);
    console.error("[properties] Supabase read failed:", error);
    return Response.json(
      {
        error: "PROPERTY_BACKEND_UNAVAILABLE",
        ...(process.env.NODE_ENV === "development" ? { detail } : {}),
      },
      { status: 503 },
    );
  }
}
