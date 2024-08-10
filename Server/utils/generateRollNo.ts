import { StudCounter } from "../models/counter.model";

const subCode = new Map<string,string>([
  ["BCA","bca"],
  ["Bsc CS","comp"],
  ["Msc CIS","cis"],
  ["Msc CS","csc"]
]);

const generateRollNo = async (subject:string, admissionYear:string): Promise<string> => {
  console.log(subject,admissionYear); 
  if(!subject || !admissionYear){
    return "";
  }

  const code = subCode.get(subject);
  const yearcode = admissionYear.slice(-2);

  console.debug(code, yearcode);
   
  var count = 1;
  
  try{
    const counter = await StudCounter.findOne({subject, admissionYear});

      if(counter) {
        count = counter?.count! + 1;
        await counter.updateOne({subject,admissionYear},{count});
        console.log("updated Stud Counter")
      } else {
        const c = new StudCounter({subject,admissionYear,count});
        await c.save();
        console.log("Created new Counter");
      }

  } catch (error){
    console.error(`Error Generating roll no`,error)
  }
  
  const countString = count.toString().padStart(3,'0');

  return code + yearcode + countString;

};

export default generateRollNo;
