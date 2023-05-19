
const hasHadBirthday=(current:Date,prev:Date):boolean=>{
    
    if(current.getMonth()>prev.getMonth()){
      return true;
    }

    if(current.getMonth()===prev.getMonth() && current.getDate()>=prev.getDate()){
       return true;
    }

    return false;

}
function isLeapYear(date: Date): boolean {
  const year = date.getFullYear();

  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 !== 0) {
    return true;
  } else if (year % 400 !== 0) {
    return false;
  } else {
    return true;
  }
}

const isLeapDate=(birth:Date)=>{
   return(isLeapYear(birth) && birth.getDate()===29)
}

interface propTypes{
  
  calculateDifference:(current:Date,prev:Date)=>number
}
export const ageCalculator=():propTypes=>{
  
  return{
      calculateDifference:(current:Date,prev:Date):number=>{
        
        let age=Math.abs(current.getFullYear()-prev.getFullYear())

        if(isLeapDate(prev))age=Math.floor(age/4)
        
        if(!hasHadBirthday(current,prev))
            age-=1
            
        return age;
      }
}

}