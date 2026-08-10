export type CapacityInputs={currentDeposit:number;monthlySavings:number;indicativeBorrowingCapacity:number;depositPercentageGoal:number;purchaseCostsEstimate:number;currentDate?:Date};
export type CapacityProjection={months:number;projectedDeposit:number;estimatedBuyingBudget:number};

export function calculateBuyingCapacity(input:CapacityInputs){
  const project=(months:number):CapacityProjection=>({months,projectedDeposit:input.currentDeposit+input.monthlySavings*months,estimatedBuyingBudget:Math.max(0,input.indicativeBorrowingCapacity+input.currentDeposit+input.monthlySavings*months-input.purchaseCostsEstimate)});
  const projections={today:project(0),threeMonths:project(3),sixMonths:project(6),nineMonths:project(9)};
  const targetDeposit=Math.max(0,(input.indicativeBorrowingCapacity+input.currentDeposit)*input.depositPercentageGoal);
  const monthsToTarget=input.monthlySavings>0?Math.max(0,Math.ceil((targetDeposit-input.currentDeposit)/input.monthlySavings)):0;
  const readyDate=new Date(input.currentDate??new Date());readyDate.setMonth(readyDate.getMonth()+monthsToTarget);
  return{...projections,targetDeposit,monthsToTarget,readyDate};
}
