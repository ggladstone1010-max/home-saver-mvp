import {getPropertyById} from "@/lib/properties/propertyService";
export async function GET(_request:Request,{params}:RouteContext<"/api/properties/[id]">){try{const{id}=await params,property=await getPropertyById(id);return property?Response.json({property}):Response.json({error:"NOT_FOUND"},{status:404})}catch{return Response.json({error:"PROPERTY_BACKEND_UNAVAILABLE"},{status:503})}}
