create extension if not exists pgcrypto;
create table if not exists public.properties (
 id uuid primary key default gen_random_uuid(), created_at timestamptz not null default now(), updated_at timestamptz not null default now(),
 inventory_type text not null check (inventory_type in ('NEW_DEVELOPMENT','PRE_MARKET_MPG','LIVE_MPG')),
 market_status text not null check (market_status in ('PRE_MARKET','COMING_SOON','ON_MARKET','AUCTION_SCHEDULED','SOLD','WITHDRAWN')),
 title text not null, address_line_1 text not null, address_line_2 text, suburb text not null, state text not null check (state in ('NSW','VIC','QLD','WA','SA','TAS','ACT','NT')), postcode text not null,
 latitude numeric, longitude numeric, price_guide numeric not null check(price_guide>=0), mpg_floor_price numeric,
 developer_name text, developer_project_name text, listing_agent_name text, listing_agent_company text,
 expected_market_date date, auction_date timestamptz, expected_availability_date date,
 bedrooms integer not null default 0 check(bedrooms>=0), bathrooms integer not null default 0 check(bathrooms>=0), car_spaces integer not null default 0 check(car_spaces>=0), land_size numeric,
 property_type text not null, new_or_established text not null check(new_or_established in ('New','Established')), description text not null,
 hero_image_url text, image_urls jsonb not null default '[]'::jsonb, access_level text not null default 'Standard' check(access_level in ('Standard','Early Access','Floor Opportunity')),
 is_active boolean not null default true, is_featured boolean not null default false, can_make_offer boolean not null default false, can_request_inspection boolean not null default true, can_register_floor_interest boolean not null default false,
 source_partner_id text, external_reference text, internal_notes text, created_by text
);
create index if not exists properties_state_idx on public.properties(state);create index if not exists properties_suburb_idx on public.properties(suburb);create index if not exists properties_inventory_idx on public.properties(inventory_type);create index if not exists properties_market_status_idx on public.properties(market_status);create index if not exists properties_active_idx on public.properties(is_active);
create or replace function public.set_updated_at() returns trigger language plpgsql as $$ begin new.updated_at=now();return new;end;$$;
drop trigger if exists properties_set_updated_at on public.properties;create trigger properties_set_updated_at before update on public.properties for each row execute function public.set_updated_at();
alter table public.properties enable row level security;
drop policy if exists "Public can read active properties" on public.properties;create policy "Public can read active properties" on public.properties for select using (is_active=true);
-- Writes use the service-role client in protected Next.js route handlers. Never expose that key in a browser.
