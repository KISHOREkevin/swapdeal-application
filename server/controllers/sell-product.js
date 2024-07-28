import SellProduct from "../models/sell-product.js";
import User from "../models/user.js";
import cloudinary from "../configs/cloudinary.config.js";
const getAllProducts = async (req, res) => {
    let products;
    try {
        products = await SellProduct.find();
        if (products.length === 0) {
            return res.status(404).json({ message: "No products found !!!" });
        }
        return res.status(200).json(products);
    } catch (error) {
        console.log(error);
    }
}

const getProductById = async (req, res) => {
    let { productid } = req.params;
    let product;
    try {
        product = await SellProduct.findById(productid);
        if (!product) {
            return res.status(404).json({ message: "No product found !!!" });
        }
        return res.status(200).json(product);
    } catch (error) {
        console.log(error);
    }
}

const getProductBySellerId = async (req, res) => {
    let { sellerid } = req.params;
    let products;
    let user;
    try {
        user = await User.findById(sellerid);
        if (!user) {
            return res.status(404).json({ message: "No user found !!!" });
        }
        products = await SellProduct.find({ sellerid });
        if (products.length === 0) {
            return res.status(404).json({ message: "you dont have any item !!!" });
        }
        return res.status(200).json(products);
    } catch (error) {
        console.log(error);
    }
}

const createProduct = async (req, res) => {
    let { sellerid } = req.params;
    let { productname, productdescription, productprize } = req.body;
    let product;
    let productavatar;
    let user;
    try {
        user = await User.findById(sellerid);
        if (!user) {
            return res.status(404).json({ message: "No user found !!!" });
        }
        try {
            productavatar = await cloudinary.uploader.upload(req.file.path, { folder: "swapdeal-application-project/sell-products" });
        } catch (error) {
            console.log(error);
        }
        product = new SellProduct({ productname, productdescription, productprize, productimage: productavatar.secure_url, productimageid: productavatar.public_id, sellerid });
        product.save();
        return res.status(201).json({ message: "Product created!!!" });
    } catch (error) {
        console.log(error);
    }
}

const updateProduct = async (req, res) => {
    let { sellerid, productid } = req.params;
    let { productname, productdescription, productprize } = req.body;
    let product;
    let productavatar;
    let user;
    try {
        user = await User.findById(sellerid);
        if (!user) {
            return res.status(404).json({ message: "No user found !!!" });
        }
        product = await SellProduct.findById(productid);
        if (!product) {
            return res.status(404).json({ message: "No product found!!!" });
        }

        try {
            await cloudinary.uploader.destroy(product.productimageid);
            productavatar = await cloudinary.uploader.upload(req.file.path, { folder: "swapdeal-application-project/sell-products" });
        } catch (error) {
            console.log(error);
        }
        await SellProduct.findByIdAndUpdate(productid, { productname, productdescription, productprize, productimage: productavatar.secure_url, productimageid: productavatar.public_id, sellerid });
        return res.status(200).json({ message: "Product updated .." });
    } catch (error) {
        console.log(error);
    }
}

const deleteProduct = async (req, res) => {
    let { productid } = req.params;
    let product;
    try {
        product = await SellProduct.findById(productid);
        if (!product) {
            return res.status(404).json({ message: "No product found !!!" });
        }
        await cloudinary.uploader.destroy(product.productimageid);
        await SellProduct.findByIdAndDelete(productid);
        return res.status(200).json({ message: "Product deleted successfully .." });
    } catch (error) {
        console.log(error);
    }
}

export { getAllProducts, createProduct, getProductById, getProductBySellerId, updateProduct, deleteProduct };