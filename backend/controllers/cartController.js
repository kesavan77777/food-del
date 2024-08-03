import userModel from '../models/userModel.js'

//add items to user cart

const addToCart=async (req,res)=>{
  try {
    let userData=await userModel.findById(req.body.userId);
    let cartData=await userData.cartData;
    if(!cartData[req.body.itemId]){
        cartData[req.body.itemId]=1;
    }
    else{
        cartData[req.body.itemId]+=1;
    }
   await userModel.findByIdAndUpdate(req.body.userId,{cartData});
   res.status(200).json({success:true,message:"Item added to cart"});
    
  } catch (error) {
    console.log(error);
    res.status(500).json({success:false,message:"Error adding item to cart"});
  }
}

//remove

const removeFromCart=async (req,res)=>{
    try {
        let userData=await userModel.findById(req.body.userId);
        let cartData=await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId]-=1;


        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.status(200).json({success:true,message:"Item removed from cart"});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"Error removing item from cart"});
        
    }
}

//get

const getCart=async (req,res)=>{
    try {
       let userData=await userModel.findById(req.body.userId);
       let cartData=await userData.cartData;
       res.status(200).json({success:true,message:"Cart data",cartData});
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"Error fetching cart data"});
        
    }

}


export {addToCart,removeFromCart,getCart}