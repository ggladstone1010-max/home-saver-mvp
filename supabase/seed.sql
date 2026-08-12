-- Idempotent demo inventory. Prices are selected so the default Home Saver
-- profile can reach one record in each category within nine months. The final
-- record deliberately sits outside that range and must not appear.
insert into public.properties(
  inventory_type, market_status, title, address_line_1, suburb, state, postcode,
  price_guide, mpg_floor_price, bedrooms, bathrooms, car_spaces, property_type,
  new_or_established, description, hero_image_url, image_urls, access_level,
  is_active, can_make_offer, can_request_inspection,
  can_register_floor_interest, external_reference
) values
('NEW_DEVELOPMENT','COMING_SOON','DEMO - Preston New Development','10 Example Street','Preston','VIC','3072',575000,null,3,2,1,'Townhouse','New','Clearly fake record for setup testing.','/property-1.svg','[{"url":"/property-1.svg","alt":"Demo new development in Preston"}]'::jsonb,'Standard',true,false,true,false,'DEMO-NEW-001'),
('PRE_MARKET_MPG','PRE_MARKET','DEMO - Coburg Pre-Market','20 Example Road','Coburg','VIC','3058',590000,570000,3,2,1,'House','Established','Clearly fake record for setup testing.','/property-2.svg','[{"url":"/property-2.svg","alt":"Demo pre-market home in Coburg"}]'::jsonb,'Early Access',true,true,true,false,'DEMO-PRE-001'),
('LIVE_MPG','ON_MARKET','DEMO - Preston Brickfloor Price','30 Example Avenue','Preston','VIC','3072',595000,575000,3,2,1,'Townhouse','Established','Clearly fake record for setup testing.','/property-3.svg','[{"url":"/property-3.svg","alt":"Demo Brickfloor Price home in Preston"}]'::jsonb,'Floor Opportunity',true,false,true,true,'DEMO-LIVE-001'),
('NEW_DEVELOPMENT','COMING_SOON','DEMO - Outside Nine-Month Range','40 Example Parade','Brighton','VIC','3186',950000,null,4,3,2,'House','New','A deliberately unaffordable test record that should be filtered out.','/property-1.svg','[]'::jsonb,'Standard',true,false,true,false,'DEMO-OUTSIDE-001')
on conflict (external_reference) where external_reference is not null do update set
  inventory_type=excluded.inventory_type,
  market_status=excluded.market_status,
  title=excluded.title,
  address_line_1=excluded.address_line_1,
  suburb=excluded.suburb,
  state=excluded.state,
  postcode=excluded.postcode,
  price_guide=excluded.price_guide,
  mpg_floor_price=excluded.mpg_floor_price,
  bedrooms=excluded.bedrooms,
  bathrooms=excluded.bathrooms,
  car_spaces=excluded.car_spaces,
  property_type=excluded.property_type,
  new_or_established=excluded.new_or_established,
  description=excluded.description,
  hero_image_url=excluded.hero_image_url,
  image_urls=excluded.image_urls,
  access_level=excluded.access_level,
  is_active=excluded.is_active,
  can_make_offer=excluded.can_make_offer,
  can_request_inspection=excluded.can_request_inspection,
  can_register_floor_interest=excluded.can_register_floor_interest;
