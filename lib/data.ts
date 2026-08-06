export const user = {
  name: "Alex Morgan", firstName: "Alex", email: "alex.morgan@email.com", age: 29,
  state: "Victoria", savings: 68400, monthlySavings: 3200, targetDeposit: 120000,
  purchasePrice: 800000, targetDate: "October 2027", suburbs: ["Brunswick", "Coburg", "Preston"],
};

export const savingsHistory = [
  { month: "Feb", value: 44200 }, { month: "Mar", value: 48100 },
  { month: "Apr", value: 52400 }, { month: "May", value: 57600 },
  { month: "Jun", value: 62300 }, { month: "Jul", value: 68400 },
];

export const properties = [
  { id:1, suburb:"Coburg, VIC", address:"18 Bell Street", price:775000, type:"House", beds:3, baths:2, parking:1, match:96, reason:"Preferred suburb, ideal bedroom count and under your target price.", image:"/property-1.svg", tag:"Best match" },
  { id:2, suburb:"Preston, VIC", address:"42 Oakover Road", price:790000, type:"Townhouse", beds:3, baths:2, parking:1, match:93, reason:"Close to budget with the space and established character you prefer.", image:"/property-2.svg", tag:"Great fit" },
  { id:3, suburb:"Brunswick, VIC", address:"7 Lygon Place", price:795000, type:"House", beds:3, baths:1, parking:1, match:91, reason:"Top-choice location and within 1% of your target property price.", image:"/property-3.svg", tag:"Top suburb" },
  { id:4, suburb:"Pascoe Vale, VIC", address:"31 Gaffney Street", price:760000, type:"Townhouse", beds:3, baths:2, parking:2, match:89, reason:"Nearby value option with three bedrooms and room in your budget.", image:"/property-2.svg", tag:"Good value" },
  { id:5, suburb:"Reservoir, VIC", address:"12 Springview Avenue", price:735000, type:"House", beds:3, baths:2, parking:1, match:86, reason:"More deposit headroom while retaining your preferred property style.", image:"/property-1.svg", tag:"Budget friendly" },
  { id:6, suburb:"Thornbury, VIC", address:"5 Miller Grove", price:815000, type:"House", beds:3, baths:2, parking:1, match:84, reason:"Strong lifestyle match and close to your preferred suburbs.", image:"/property-3.svg", tag:"Lifestyle match" },
];

export const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: "home" },
  { href: "/deposit-tracker", label: "My Plan", icon: "chart" },
  { href: "/property-matches", label: "Properties", icon: "building" },
  { href: "/investment-pledge", label: "Fund Interest", icon: "sparkle" },
  { href: "/mortgage-broker", label: "Broker", icon: "users" },
  { href: "/profile", label: "Profile", icon: "user" },
] as const;
