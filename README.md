# Home Saver MVP

Home Saver is a browser-only Next.js demo for Australian first-home buyers.

## Demo flow

Start at `/`, complete the six-step resumable onboarding, or use **Continue as demo user** at `/sign-in`. The authenticated demo includes Dashboard, My Plan, Deposit Tracker, Borrowing Capacity, demonstration Property Matches and Details, Fund Interest, Broker, and Profile. `/admin` provides a clearly labelled internal mock-data view.

All profile edits, onboarding progress, contributions, saved properties, enquiries, broker choices and non-binding fund interest are stored in `localStorage` under `home-saver-demo-v2`. **Reset demo** clears it. No external services, real listings, authentication, banking, lending, payments, or investment execution are used.

## Commands

```bash
npm run dev
npm run lint
npm run build
```
