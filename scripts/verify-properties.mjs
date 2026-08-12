import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const placeholders = ["https://your-project.supabase.co", "your-anon-key"];

if (!url || !key || placeholders.includes(url) || placeholders.includes(key)) {
  console.error("Missing real NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local.");
  process.exit(1);
}

const expected = ["NEW_DEVELOPMENT", "PRE_MARKET_MPG", "LIVE_MPG"];
const supabase = createClient(url, key, { auth: { persistSession: false } });
const { data, error } = await supabase
  .from("properties")
  .select("id,inventory_type,title,price_guide,is_active")
  .eq("is_active", true);

if (error) {
  console.error("Supabase property verification failed:", error);
  process.exit(1);
}

const rows = data ?? [];
const missing = expected.filter((type) => !rows.some((row) => row.inventory_type === type));
console.log(`Connected successfully. Read ${rows.length} active properties through the public RLS policy.`);
for (const type of expected) {
  console.log(`${type}: ${rows.filter((row) => row.inventory_type === type).length}`);
}
if (!rows.length || missing.length) {
  console.error(`Seed verification failed. Missing active inventory: ${missing.join(", ") || "all"}.`);
  process.exit(1);
}
console.log("Property schema, seed categories and anonymous read policy are working.");
