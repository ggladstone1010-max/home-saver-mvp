-- Safe to run against both new and previously configured projects.
-- Required for repeatable demo seed imports.
create unique index if not exists properties_external_reference_unique_idx
  on public.properties(external_reference)
  where external_reference is not null;

-- Reassert the intended public-read policy in case an earlier environment was
-- configured differently. Anonymous users may only read active inventory.
alter table public.properties enable row level security;
drop policy if exists "Public can read active properties" on public.properties;
create policy "Public can read active properties"
  on public.properties for select
  to anon, authenticated
  using (is_active = true);
