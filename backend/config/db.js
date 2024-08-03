import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://kesavan:Kesavan77@cluster0.rlhkeyu.mongodb.net/food-del').then(()=>{
     console.log("db connected");
    }
    )
}