import BuyProduct from "../models/buy-product.js";
import SellProduct from "../models/sell-product.js";
import User from "../models/user.js";
const getAllProducts = async (req,res)=>{
    let products;
    try {
        products = await BuyProduct.find();
        if(products.length===0){
            return res.status(404).json({message:"No products found !!"});
        }
        return res.status(200).json(products);
    } catch (error) {
        console.log(error);
    }
}
const getProductById = async (req,res)=>{
    let {productid} = req.params;
    let product;
    try {
        product = await BuyProduct.findById(productid);
        if(!product){
            return res.status(404).json({message:"No product found .."});
        }
        return res.status(200).json(product);
    } catch (error) {
        console.log(error);
    }
}

const getProductByBuyerId = async(req,res)=>{
    let {buyerid} = req.params;
    let products;
    let user;
    try {
        user = await User.findById(buyerid);
        if(!user){
            return res.status(404).json({message:"User not found!!!"});
        }
        products = await BuyProduct.find({buyerid}).populate("productid");
        if(products.length===0){
            return res.status(404).json({message:"You didn't buy any product!!!"});
        }
        return res.status(200).json(products);
    } catch (error) {
        console.log(error);
    }
}

const getProductByProductId = async (req,res)=>{
    let {productid} = req.params;
    let products;
    try {
        products = await BuyProduct.find({productid}).populate("buyerid");
        if(products.length===0){
            return res.status(404).json({message:"No users buy this product..."});
        }
        return res.status(200).json(products)
    } catch (error) {
        console.log(error);
    }
}

const createProduct = async (req,res)=>{
    let {productid,buyerid} = req.params;
    let {quantity} = req.body;
    let sellProduct;
    let user;
    let totalprice;
    let product;
   
    try {
        sellProduct = await SellProduct.findById(productid);
        if(!sellProduct){
            return res.status(404).json({message:"No product found!!!"});
        }
        user = await User.findById(buyerid);
        if(!user){
            return res.status(404).json({message:"No user found!!!"});
        }
        totalprice = await quantity * sellProduct.productprize;
        product = new BuyProduct({productid,quantity,totalprice,buyerid,sellerid:sellProduct.sellerid});
        product.save();
        return res.status(201).json({message:"buying product successfull!!!"});
    } catch (error) {
        console.log(error);
    }
}

const deleteProduct = async (req,res)=>{
    let {productid} = req.params;
    let product;
    try {
        product = await BuyProduct.findByIdAndDelete(productid);
        if(!product){
            return res.status(404).json({message:"No product found!!"});
        }
        return res.status(200).json({message:"Product deleted ..."});
    } catch (error) {
        console.log(error);
    }
}







export {getAllProducts,createProduct,deleteProduct,getProductById,getProductByBuyerId,getProductByProductId};