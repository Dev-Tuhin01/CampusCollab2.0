import mongoose from "mongoose";


export const connectToMongoDB = async () => {
  try {
    if (typeof process.env.MONGO_DB_URI !== "undefined") {
      
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("connected to mongodb");
    
    }
  } catch (error:unknown) {
    console.log("Error Connecting MongoDB");
    
    
   if (typeof error === "string") {
    console.error(error.toUpperCase());
    } else if (error instanceof Error) {
      console.error(error.message);
      
    } else{
      console.error((error as Error).message);
      
    }
  }
}
