# Supabase property setup

1. Create a project at Supabase and wait for it to finish provisioning.
2. Open **Project Settings → API**. Copy the Project URL, anon key and service-role key.
3. Copy `.env.example` to `.env.local`. Paste the three Supabase values and choose a long random `PROPERTY_ADMIN_TOKEN`.
4. In Supabase, open **SQL Editor**, paste `supabase/migrations/001_properties.sql`, then run it once.
5. Optional: run `supabase/seed.sql` to add three clearly fake test properties.
6. Restart `npm run dev`. Open `/admin/properties`, enter the same temporary admin token, and press **Connect**.
7. Add a property, leave **Active** checked, save it, then open `/property-matches` to verify it appears in matching.
8. In Vercel, open **Project Settings → Environment Variables** and add the same four production values. Keep `NEXT_PUBLIC_ENABLE_PROPERTY_DEMO_FALLBACK` false or unset.

The service-role key is server-only. Never prefix it with `NEXT_PUBLIC_` or paste it into browser code. Public users can read active properties through Row Level Security. Admin writes currently use a temporary shared token because staff authentication is not implemented; replace this with real staff authentication before production launch.
