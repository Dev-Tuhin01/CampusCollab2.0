import { StudCounter } from "../models/counter.model";

const subCode = new Map<String,String>([
  ["BCA","bca"],
  ["Bsc CS","comp"],
  ["Msc CIS","cis"],
  ["Msc CS","csc"]
]);

const generateRollNo = async (subject:String, admissionYear:String) =>{
  console.log(subject,admissionYear); 
  if(!subject || !admissionYear){
    return "";
  }

  const code = subCode.get(subject);
  const yearcode = admissionYear.slice(-2);

  console.debug(code,yearcode);
   
  var count = 1
  
  const counter = await StudCounter.findOne({subject,admissionYear});
  if(counter){
    count = counter?.count! + 1;
  } else{
    const c = new StudCounter({subject,admissionYear,count})
    c.save()
  }
  const countString = count < 100 ? count < 10 ? "00"+count.toString() : "0" + count.toString() : count.toString()

  return code + yearcode + countString;

};

export default generateRollNo;
