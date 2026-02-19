
const mongoose=require("mongoose");

const User=mongoose.model("User",{
 name:String,email:String,password:String,phone:String,userType:String
});

const Complaint=mongoose.model("Complaint",{
 name:String,comment:String,status:{type:String,default:"Pending"}
});

module.exports={User,Complaint};
