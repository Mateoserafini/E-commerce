import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://matuserafini:45089673@cluster0.frnygq1.mongodb.net/bibloteca?retryWrites=true&w=majority&appName=Cluster0"
          );
      
        console.log("db connected"); 
    } catch (error) {
        console.log(error);
    }
}