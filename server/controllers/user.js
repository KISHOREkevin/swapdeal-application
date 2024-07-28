import User from "../models/user.js";
import bcrypt from "bcrypt";
import "dotenv/config";
import cloudinary from "../configs/cloudinary.config.js";
import SellProduct from "../models/sell-product.js";
import BuyProduct from "../models/buy-product.js";
const getAllUsers = async (req,res)=>{
    let users;
    try {
        users= await User.find();
        if(users.length===0){
            return res.status(404).json({message:"No users found"});
        }
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
    }
}

const getSingleUser = async (req,res)=>{
    let {userid} = req.params;
    let user;
    try {
        user = await User.findById(userid);
        if(!user){
            return res.status(404).json({message:"User not found !!!"});
        }
        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
    }
}

const createUser = async(req,res)=>{
    let {username,useremail,userpassword,userphno,useraddress} = req.body;
    let useravatar;
    let hashedPassword;
    let user;
    let existingUser;
    try {
        
        existingUser = await User.findOne({useremail});
        if(existingUser){
            return res.status(409).json({message:"User already exists ..."});
        }
        hashedPassword = bcrypt.hashSync(userpassword,Number(process.env.SALT_ROUNDS));
        try {
            useravatar = await cloudinary.uploader.upload(req.file.path,{folder:"swapdeal-application-project/users"});
        } catch (error) {
            console.log(error);
        }
        user = new User({username,useremail,userpassword:hashedPassword,userphno,useraddress,userimage:useravatar.secure_url,userimageid:useravatar.public_id});
        user.save();
        return res.status(201).json({message:"Sign up successfull !!"});

    } catch (error) {
        console.log(error);
    }
}

const userAuth = async (req,res)=>{
    let {useremail,userpassword} = req.body;
    let existingUser;
    let validity;
    try {
        existingUser = await User.findOne({useremail});
        if(!existingUser){
            return res.status(404).json({message:"username and password invalid!!!"});
        }
        validity = bcrypt.compareSync(userpassword,existingUser.userpassword);
        if(validity){
            return res.status(200).json({message:"Sign in successfull!!",existingUser});
        }else{
            return res.status(401).json({message:"username and password invalid!!!"});
        }

    } catch (error) {
        console.log(error);
    }
}

const updateUser = async (req,res)=>{
    let {userid} = req.params;
    let {username,useremail,userphno,useraddress} = req.body;
    let user;
    let useravatar;
    try {
        user = await User.findById(userid);
        if(!user){
            return res.status(404).json({message:"No user found ..."});
        }
      
        try {
            await cloudinary.uploader.destroy(user.userimageid);
            useravatar = await cloudinary.uploader.upload(req.file.path,{folder:"swapdeal-application-project/users"});
        } catch (error) {
            console.log(error);
        }
        await User.findByIdAndUpdate(userid,{username,useremail,userphno,useraddress,userimage:useravatar.secure_url,userimageid:useravatar.public_id});
        return res.status(200).json({message:"Profile updated!!"});
    } catch (error) {
        console.log(error);
    }

}

const deleteUser = async (req,res)=>{
    let {userid} = req.params;
    let user;
    let products;
    let imageids=[];
    try {
        user = await User.findById(userid);
       
        if(!user){
            return res.status(404).json({message:"No user found !!"});
        }
        products = await SellProduct.find({sellerid:userid});
        if(products.length!==0){ 
            products.map((product) => {
                imageids.push(product.productimageid);
            })
            await cloudinary.api.delete_resources(imageids);
        }
       
        await cloudinary.uploader.destroy(user.userimageid);
        await SellProduct.deleteMany({sellerid:userid});
        
        await BuyProduct.deleteMany({buyerid:userid});
        await User.findByIdAndDelete(userid);
        return res.status(200).json({message:"Profile deleted !!!"});
    } catch (error) {
        console.log(error);
    }
}



export {getAllUsers,createUser,userAuth,getSingleUser,updateUser,deleteUser};