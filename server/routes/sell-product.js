import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProductById, getProductBySellerId, updateProduct } from "../controllers/sell-product.js";
import sellProductAvatars from "../services/sell-product-avatars.js";
const sellProductRoutes = express.Router();

sellProductRoutes.get("/",getAllProducts);
sellProductRoutes.get("/:productid",getProductById);
sellProductRoutes.get("/sell-products/:sellerid",getProductBySellerId);
sellProductRoutes.post("/create-product/:sellerid",sellProductAvatars.single("productimage"),createProduct);
sellProductRoutes.put("/update-product/:sellerid/:productid",sellProductAvatars.single("productimage"),updateProduct);
sellProductRoutes.delete("/delete-product/:productid",deleteProduct);
export default sellProductRoutes;