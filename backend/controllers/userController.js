import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import validator from "validator"


//login

const loginUser=async(req,res)=>{
   const{email,password}=req.body;
   console.log("success");
   try{
    const user=await userModel.findOne({email});
    if(!user) return res.status(400).json({success:false,msg:"User not found"})
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
      return res.status(400).json({success:false,msg:"Invalid password"})
    }
     
    const token=createToken(user._id);
    res.status(200).json({success:true,msg:"Logged in successfully",token})
   }catch(error){
     console.log(error);
     res.status(500).json({success:false,msg:"Internal server error"})
   }


}
const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET);
}
//register
const registerUser=async(req,res)=>{
  const {name,password,email}=req.body;
  try{
        const exists=await userModel.findOne({email});
        if(exists) return res.status(400).json({success:false,msg:"Email already exists"})
        //
      //validating email format and password

      if(!validator.isEmail(email)){
        return res.status(400).json({success:false,msg:"Invalid email format"})
      }

      if(password.length<8){
        return res.status(400).json({success:false,msg:"Password must be at least 8"})

      }

      //hashing user password

      const  salt=await bcrypt.genSalt(10)
      const hashedPassword=await bcrypt.hash(password,salt)

      const newUser=new userModel({
        name:name,
        email:email,
        password:hashedPassword
      });

      const user=await newUser.save();
      const token=createToken(user._id);
      res.json({success:true,token});






  }catch(error){
       console.log(error)
       res.json({success:false,msg:"error"})
  }
}

export {loginUser,registerUser}
