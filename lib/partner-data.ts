import type { AcquisitionChannel, PartnerType } from "./types";

export const demoPartners = [
  { id: "loan-market-john", organisationName: "Loan Market", contactName: "John Smith", partnerType: "mortgage_broker" as PartnerType, referralCode: "LM-JS-24" },
  { id: "stockland-vic", organisationName: "Stockland", contactName: "Sarah Wilson", partnerType: "developer" as PartnerType, referralCode: "STOCK-VIC" },
  { id: "harbour-agency", organisationName: "Harbour & Co Real Estate", contactName: "Mia Taylor", partnerType: "real_estate_agent" as PartnerType, referralCode: "HARBOUR-01" },
  { id: "north-buyers", organisationName: "Northside Buyers Agency", contactName: "Daniel Kim", partnerType: "buyers_agent" as PartnerType, referralCode: "NBA-2026" },
  { id: "future-wealth", organisationName: "Future Wealth", contactName: "Emily Jones", partnerType: "financial_adviser" as PartnerType, referralCode: "FW-2026" },
];
export const distributionPartners = demoPartners.map((partner,index)=>({partnerId:partner.id,partnerType:partner.partnerType==="mortgage_broker"?"MORTGAGE_BROKER" as const:partner.partnerType==="financial_adviser"?"FINANCIAL_ADVISER" as const:partner.partnerType==="buyers_agent"?"BUYERS_AGENT" as const:partner.partnerType==="developer"?"DEVELOPER" as const:"PROPERTY_PARTNER" as const,company:partner.organisationName,contact:partner.contactName,usersIntroduced:8+index*3,usersActive:6+index*2,usersFinanceReady:2+index,usersPropertyReady:1+index,fundInterestCount:index+1}));
const names = ["Priya", "Liam", "Sophie", "Noah", "Amelia", "Jack", "Mia", "Oliver", "Grace", "Henry", "Zoe", "Lucas", "Ava", "Ethan", "Isla", "Leo", "Ruby", "Thomas", "Chloe", "Max", "Ella", "Oscar", "Lucy", "Archer", "Matilda", "Finn", "Evie", "Hugo", "Lily", "Sam"];
const suburbs = ["Brunswick", "Coburg", "Preston", "Parramatta", "Chermside", "Baldivis", "Bowden", "Werribee", "Footscray", "Newstead"];
const channels: AcquisitionChannel[] = ["direct", "meta", "mortgage_broker", "developer", "agent", "buyers_agent", "adviser", "bank", "employer", "other"];

export const demoUsers = names.map((firstName, index) => {
  const partner = index % 3 === 0 ? demoPartners[index % 4] : null;
  const monthlySavings = 1200 + (index % 7) * 550;
  const currentDeposit = 22000 + (index * 4300) % 105000;
  const targetPrice = 580000 + (index % 8) * 45000;
  const borrowing = 470000 + (index % 6) * 40000;
  const projectedDeposit = currentDeposit + monthlySavings * 9;
  const capacity = borrowing + projectedDeposit - targetPrice * .04;
  const months = Math.max(0, Math.min(24, Math.ceil((targetPrice - (borrowing + currentDeposit - targetPrice * .04)) / Math.max(1, monthlySavings))));
  const currentMortgageBroker = index % 4 === 0 ? "John Smith — Loan Market" : index % 3 === 0 ? "Connected broker" : "None";
  const currentBuyersAgent = partner?.partnerType === "buyers_agent" ? `${partner.contactName} — ${partner.organisationName}` : index % 9 === 1 ? "Ava Patel — Home Search Co" : "None";
  const currentFinancialAdviser = index % 10 === 2 ? "Emily Jones — Future Wealth" : "None";
  const introductionRequests = index % 4 === 0 ? "Mortgage broker" : index % 7 === 0 ? "Buyer’s agent" : "None";
  const fundInterest=index%3===0?5000+index*1000:0, fundBalance=index%6===0?10000:0, fundShareConsent=index%10===2;
  return { id: `user-${index + 1}`, firstName, currentDeposit, monthlySavings, targetPrice, borrowing, projectedDeposit, capacity, months, suburbs: [suburbs[index % suburbs.length], suburbs[(index + 2) % suburbs.length]], readiness: 48 + (index * 7) % 50, broker: index % 4 === 0 ? "Introduction" : index % 3 === 0 ? "Linked" : "Not connected", fundInterest, fundBalance,totalHomeGoalAssets:currentDeposit+fundBalance,fundInterestStatus:fundInterest?"Interested":"Exploring",expectedInvestmentTiming:["Now","Within 3 months","3–6 months","6–12 months","Just exploring"][index%5],wantsAdviserDiscussion:index%10===2,fundShareConsent, acquisitionChannel: partner ? (partner.partnerType === "real_estate_agent" ? "agent" : partner.partnerType) as AcquisitionChannel : channels[index % channels.length], partnerId: partner?.id ?? null, progressConsent: index % 5 !== 0, homeowner: index % 6 === 0, sellerSignal: index % 6 === 0 && index % 2 === 0, mpgInterest: index % 8 === 0, propertyType: ["House", "Townhouse", "Apartment"][index % 3], newBuild: index % 2 === 0, barrier: ["deposit", "borrowing capacity", "property prices", "uncertainty about selling"][index % 4], originalAcquisitionPartner: partner?.organisationName ?? "Direct", originalAcquisitionAdviser: partner?.contactName ?? "None", currentMortgageBroker, currentBuyersAgent, currentFinancialAdviser, introductionRequests, adviserPermissions: index % 5 !== 0 ? "Progress sharing" : "Private" };
});
