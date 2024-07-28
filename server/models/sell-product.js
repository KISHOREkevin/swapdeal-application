import mongoose from "mongoose";
const sellProductSchema = new mongoose.Schema({
    productname:{type:String,required:true},
    productdescription:{type:String,required:true},
    productprize:{type:Number,required:true},
    productimage:{type:String,required:true},
    productimageid:{type:String,required:true},
    sellerid:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    createdAt:{type:Date,default:Date.now()},
})

const SellProduct = mongoose.model("SellProduct",sellProductSchema);

export default SellProduct;