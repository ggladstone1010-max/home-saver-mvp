export const PROFILE_KEY = "home-saver-profile-v1";
export const FUND_KEY = "home-saver-fund-interest-v1";
export const BROKER_KEY = "home-saver-broker-v1";

export type DemoProfile = {
  firstName: string; lastName: string; email: string; mobile: string; state: string;
  currentSavings: number; monthlySavings: number; targetPrice: number; timeframe: string;
  suburbs: string[]; propertyType: string; bedrooms: number; propertyCondition: string;
  hasBroker: boolean; wantsBrokerIntro: boolean; referralSource: string; completed: boolean;
};
export type FundInterest = { amount: number; availableDate: string; horizon: string; priorityNotification: boolean; submitted: boolean };
export type BrokerDetails = { mode: "none"|"existing"|"introduction"; name: string; email: string; consent: boolean };

export const defaultProfile: DemoProfile = {
  firstName:"Alex", lastName:"Morgan", email:"alex.morgan@email.com", mobile:"0412 345 678", state:"VIC",
  currentSavings:68400, monthlySavings:3200, targetPrice:800000, timeframe:"12–18 months",
  suburbs:["Brunswick","Coburg","Preston"], propertyType:"House", bedrooms:3, propertyCondition:"Established",
  hasBroker:false, wantsBrokerIntro:false, referralSource:"Social media", completed:false,
};
export const defaultFund: FundInterest = { amount:10000, availableDate:"Within 12 months", horizon:"5–7 years", priorityNotification:true, submitted:false };
export const defaultBroker: BrokerDetails = { mode:"none", name:"", email:"", consent:false };

export function calculatePlan(profile: DemoProfile){
  const targetDeposit=Math.round(profile.targetPrice*.15);
  const remaining=Math.max(0,targetDeposit-profile.currentSavings);
  const months=profile.monthlySavings>0?Math.ceil(remaining/profile.monthlySavings):0;
  const targetDate=new Date(); targetDate.setMonth(targetDate.getMonth()+months);
  const progress=Math.min(100,Math.round(profile.currentSavings/targetDeposit*100));
  const borrowing=Math.round(Math.max(250000,profile.targetPrice-profile.currentSavings)*.88/5000)*5000;
  const readiness=Math.min(96,Math.round(progress*.72+(profile.suburbs.length?10:0)+(profile.hasBroker||profile.wantsBrokerIntro?9:3)+(profile.monthlySavings>=2500?9:5)));
  return {targetDeposit,remaining,months,progress,borrowing,readiness,targetDate:targetDate.toLocaleDateString("en-AU",{month:"long",year:"numeric"})};
}
