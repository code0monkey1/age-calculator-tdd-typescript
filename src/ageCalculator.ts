

interface propTypes{
  
  calculate:(from:Date,to:Date)=>number
}
export const ageCalculator=():propTypes=>{
  
  return{
      calculate:(from:Date,to:Date):number=>{
        const year1 = from.getFullYear();
        const year2 = to.getFullYear();
        return Math.abs(year2 - year1);
      }
}

}