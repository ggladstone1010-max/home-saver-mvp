import type { DemoState } from "./types";
export const defaultState:DemoState={
  user:{firstName:"Alex",lastName:"Morgan",email:"alex.morgan@email.com",mobile:"0412 345 678",ageRange:"25–34",state:"VIC",referralSource:"Social media"},
  financial:{currentSavings:68400,monthlySavings:3200,householdIncome:125000,monthlyExpenses:3600,monthlyDebtRepayments:350,buyingWithSomeone:false},
  goal:{targetPrice:800000,timeframe:"12–18 months",firstHomeBuyer:true,targetDate:""},
  preference:{suburbs:["Brunswick","Coburg","Preston"],propertyType:"House",bedrooms:3,condition:"Established"},
  broker:{mode:"none",name:"",company:"",email:"",phone:"",consent:false,shareContact:true},
  fund:{interested:false,amount:10000,availableDate:"Within 12 months",horizon:"5–7 years",priorityNotification:true,submitted:false},
  contributions:[{id:"1",month:"2026-03",amount:2800},{id:"2",month:"2026-04",amount:3200},{id:"3",month:"2026-05",amount:3500},{id:"4",month:"2026-06",amount:3000},{id:"5",month:"2026-07",amount:3400},{id:"6",month:"2026-08",amount:3200}],
  savedPropertyIds:[],enquiries:[],onboardingStep:0,completed:false,notifications:{savings:true,properties:true,broker:true},
};
export function calculatePlan(state:DemoState){const targetDeposit=Math.round(state.goal.targetPrice*.2);const remaining=Math.max(0,targetDeposit-state.financial.currentSavings);const months=state.financial.monthlySavings>0?Math.ceil(remaining/state.financial.monthlySavings):0;const targetDate=new Date();targetDate.setMonth(targetDate.getMonth()+months);const progress=Math.min(100,Math.round(state.financial.currentSavings/Math.max(1,targetDeposit)*100));const annualCommitments=state.financial.monthlyExpenses*12+state.financial.monthlyDebtRepayments*12;const borrowing=Math.max(0,Math.round((state.financial.householdIncome*4.8-annualCommitments*.65)/5000)*5000);const capacity=borrowing+state.financial.currentSavings;const readiness=Math.min(98,Math.round(progress*.58+(state.preference.suburbs.length>=3?10:5)+(state.broker.mode!=="none"?10:3)+(state.goal.firstHomeBuyer?7:4)+(state.financial.monthlySavings>0?15:0)));return{targetDeposit,remaining,months,progress,borrowing,capacity,gap:capacity-state.goal.targetPrice,readiness,targetDate:targetDate.toLocaleDateString("en-AU",{month:"long",year:"numeric"})}}
export const money=(n:number)=>new Intl.NumberFormat("en-AU",{style:"currency",currency:"AUD",maximumFractionDigits:0}).format(n);
