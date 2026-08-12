import {createClient} from "@supabase/supabase-js";

export function createPublicSupabaseClient(){const url=process.env.NEXT_PUBLIC_SUPABASE_URL,key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;if(!url||!key)throw new Error("PROPERTY_BACKEND_NOT_CONFIGURED");return createClient(url,key,{auth:{persistSession:false}})}
