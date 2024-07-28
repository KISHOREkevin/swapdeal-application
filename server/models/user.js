import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username:{type:String,required:true},
    useremail:{type:String,required:true},
    userpassword:{type:String,required:true},
    useraddress:{type:String,required:true},
    userphno:{type:Number,required:true},
    userimage:{type:String,required:true},
    userimageid:{type:String,required:true}
})

const User = mongoose.model("User",userSchema);

export default User;