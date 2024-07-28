import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProductByBuyerId, getProductById, getProductByProductId } from "../controllers/buy-product.js";
const buyProductRoutes = express.Router();

buyProductRoutes.get("/",getAllProducts);
buyProductRoutes.get("/:productid",getProductById);
buyProductRoutes.get("/product-by-buyer/:buyerid",getProductByBuyerId);
buyProductRoutes.get("/product-by-product/:productid",getProductByProductId);
buyProductRoutes.post("/create-product/:buyerid/:productid",createProduct);
buyProductRoutes.delete("/delete-product/:productid",deleteProduct);
export default buyProductRoutes;