import mongoose from "mongoose";

const ProductHistorySchema = new mongoose.Schema({
    buyerid:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    productid:{type:mongoose.Schema.Types.ObjectId,ref:"SellProduct"},
    sellerid:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    buyproductid:{type:mongoose.Schema.Types.ObjectId,ref:"BuyProduct"},
    createdAt:{type:Date,default:Date.now()}
})

const ProductHistory = mongoose.model("ProductHistory", ProductHistorySchema);
export default ProductHistory;
