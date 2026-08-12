# Home Saver MVP

Home Saver is a browser-only Next.js demo for Australian first-home buyers.

## Demo flow

Start at `/`, complete the six-step resumable onboarding, or use **Continue as demo user** at `/sign-in`. The authenticated demo includes Dashboard, My Plan, Deposit Tracker, Borrowing Capacity, demonstration Property Matches and Details, Fund Interest, Broker, and Profile. `/admin` provides a clearly labelled internal mock-data view.

All profile edits, onboarding progress, partner attribution, consent settings, contributions, saved properties, enquiries, broker choices and non-binding fund interest are stored in `localStorage` under `home-saver-demo-v3`. **Reset demo** clears it. No external services, real listings, authentication, banking, lending, payments, or investment execution are used.

## Demo walkthrough

- **Direct first-home buyer:** Start onboarding from `/` and build a nine-month buying-position forecast.
- **Mortgage broker referred saver:** Continue as the demo user, enable partner consent in Profile, then view the nurture pipeline at `/partner`.
- **Developer referred buyer:** Switch to Stockland in Partner Demo to see aggregated demand and consent-protected introductions.
- **Existing homeowner:** In Profile choose homeowner and enable seller/MPG signals, then review Seller Signals in `/admin`.
- **Private access concept:** Visit `/private-access` to see mock Standard, Priority and Private progression.
- **Admin CRM:** Use `/admin` to filter synthetic users by acquisition source and review demand, seller, fund and broker signals.

Demo state is stored under `home-saver-demo-v4`. Use **Reset demo** in Profile to clear it.

## Brickfloor property opportunity categories

- **New Developments:** synthetic partner-developer stock with project details and information requests.
- **Pre-Market MPG:** synthetic homes presented before public listing, with a non-binding early-offer demonstration.
- **Live MPG:** synthetic on-market homes associated with a Brickfloor floor-price arrangement. No MPG rights are transferred.

The normal feed shows only homes projected to come within reach over approximately nine months. It combines current deposit, monthly savings and the indicative borrowing estimate, then subtracts a planning allowance for acquisition costs. It does not represent credit approval or confirmed affordability.

To test the flows, continue as the demo user, visit **Properties**, open a Pre-Market MPG home and submit an early-offer expression. Then open a Live MPG home and register floor-price interest. Both records appear in **My Activity** and the Admin Property Opportunities report. All requests remain local to the browser under `home-saver-demo-v4`.

## Commands

```bash
npm run dev
npm run lint
npm run build
```

## Real property inventory

Property inventory now comes from Supabase rather than hard-coded demo data. The workflow is:

`Admin → Add property → Activate → Home Saver automatically applies the existing matching engine.`

Use `/admin/properties` for manual management or `/admin/properties/import` with the downloadable CSV template. External Domain, REA and listing feeds remain future integrations. Production does not silently fall back to fixtures; a development-only fallback must be explicitly enabled.

Required variables are documented in `.env.example`. Follow [docs/SUPABASE_SETUP.md](docs/SUPABASE_SETUP.md) for setup, SQL migration, Vercel configuration and first-property verification.
