import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  studentName:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
    minlength:8
  },
  subject:{
    type:String,
    required:true
  },
  semester:{
    type:String,
    required:true
  },
  admissionYear:{
    type:String,
    required:true,
  },
  rollNo:{
    type:String,
    required:true
  },
  gender:{
    type:String,
    required:true,
    enum:["male","female"]
  },
  profilePic:{
    type:String,
    default:""
  }
},{
    timestamps:true
  });

export const Student = mongoose.model("Student",studentSchema);

// export default Student;

const teacherSchema =  new mongoose.Schema({
  teacherName:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
    minlength:8
  },
  subject:{
    type:String,
    required:true
  },
  joiningYear:{
    type:String,
    required:true,
  },
  teacherID:{
    type:String,
    required:true
  },
  gender:{
    type:String,
    required:true,
    enum:["male","female"]
  },
  profilePic:{
    type:String,
    default:""
  }
});


export const Teacher = mongoose.model("Teacher",teacherSchema);

