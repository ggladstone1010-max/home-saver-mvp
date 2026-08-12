# Supabase property setup

The property pages intentionally do not fall back to hard-coded records. A real
Supabase project is required.

## 1. Create or open the Supabase project

1. Go to https://supabase.com/dashboard and create a project if one does not exist.
2. Wait until the project reports that it is ready.
3. Open **Project Settings → API** (in newer dashboards, **Connect → App Frameworks** may expose the same values).
4. Copy the **Project URL**, **anon/public key**, and **service_role key**. Never expose the service-role key in browser code.

## 2. Configure this checkout

From the repository root in PowerShell:

```powershell
Copy-Item .env.example .env.local
notepad .env.local
```

Replace every placeholder with the real values:

```dotenv
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_REAL_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY=YOUR_REAL_SERVICE_ROLE_KEY
PROPERTY_ADMIN_TOKEN=choose-a-long-random-temporary-admin-token
NEXT_PUBLIC_ENABLE_PROPERTY_DEMO_FALLBACK=false
```

Do not commit `.env.local`. Restart Next.js whenever these values change.

## 3. Create the table, policy and demo inventory

In the Supabase dashboard, open **SQL Editor → New query**:

1. Paste and run all of `supabase/migrations/001_properties.sql`.
2. Paste and run all of `supabase/migrations/002_property_seed_support.sql`.
3. Paste and run all of `supabase/seed.sql`.

All three scripts are safe to rerun. The seed contains one affordable example
for each inventory type and one deliberately out-of-range property.

## 4. Verify before starting the app

```powershell
npm run verify:properties
npm run dev
```

The verifier confirms the URL/key work, the table has the columns queried by the
app, RLS permits anonymous reads of active records, and all three inventory types
were seeded. Then open `http://localhost:3000/property-matches`.

If verification reports `relation properties does not exist`, run the migrations.
If it reports a permission error, rerun migration 002. If it connects but reports
missing inventory, run the seed. A malformed URL or invalid key means `.env.local`
still contains an incorrect value.

Admin writes use the server-only service-role key and temporary admin token.
Replace that token mechanism with real staff authentication before production.
