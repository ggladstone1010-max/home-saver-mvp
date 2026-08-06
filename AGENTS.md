<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Home Saver project conventions

- Use App Router, TypeScript and the existing Tailwind/global CSS design system.
- Centralise browser persistence in `lib/storage.ts`; keep it SSR-safe.
- Use Australian spelling and AUD formatting. Label property, borrowing and fund content as demonstration, indicative or non-binding.
- Do not add real authentication, external APIs, banking, payments or investment execution without explicit approval.
- Preserve the landing visual identity and maintain mobile-first, keyboard-accessible routes.
- Before completion run `npm run lint` and `npm run build`.
