import {getActiveProperties} from "@/lib/properties/propertyService";
export const dynamic="force-dynamic";
export async function GET(){try{return Response.json({properties:await getActiveProperties()})}catch{return Response.json({error:"PROPERTY_BACKEND_UNAVAILABLE"},{status:503})}}
