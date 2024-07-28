import mongoose from "mongoose";

const buyProductSchema = new mongoose.Schema({
  productid: { type: mongoose.Schema.Types.ObjectId, ref: "SellProduct" },
  quantity: { type: Number, required: true, default: 1 },
  totalprice: { type: Number, required: true, default: 0 },
  buyerid: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  sellerid: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now() }
})
const BuyProduct = mongoose.model("BuyProduct", buyProductSchema);
export default BuyProduct;
