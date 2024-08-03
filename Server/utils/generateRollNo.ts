import { studCounter } from "../models/counter.model";

const subCode = new Map<String,String>([
  ["BCA","bca"],
  ["Bsc CS","comp"],
  ["Msc CIS","cis"],
  ["Msc CS","csc"]
]);

const generateRollNo = async (subject:String, admissionYear:String) =>{
  const code = subCode.get(subject);
  const yearcode = admissionYear.slice(-2);
  var count = 1
  
  const counter = await studCounter.findOne(subject,admissionYear);
  if(counter){
    count = counter?.count! + 1;
  }
  const countString = count < 100 ? count < 10 ? "00"+count.toString() : "0" + count.toString() : count.toString()
  studCounter.findOneAndUpdate({subject,admissionYear},{count},{
    upsert:true
  });

  return countString;

};

export default generateRollNo;
