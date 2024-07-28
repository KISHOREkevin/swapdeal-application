import multer from "multer";
import path from "path";
import {v4 as uuidv4} from "uuid";
const multerStorage = multer.diskStorage({
    filename:(req,file,cb)=>{
        cb(null,Date.now()+uuidv4()+path.extname(file.originalname));
    },
    destination:(req,file,cb)=>{
        cb(null,"uploads/sell-products");
    }
})

const fileCheckType = (file,cb)=>{
    let fileTypes = /jpg|jpeg|png/
    let fileext = fileTypes.test(path.extname(file.originalname).toLowerCase());
    let mimetype = fileTypes.test(file.mimetype);
    if(fileext && mimetype){
        return cb(null,true)
    }else{
        return cb("Error : the supported file types are (jpg,jpeg,png) ..");
    }
}

const sellProductAvatars = multer({storage:multerStorage,fileFilter:(req,file,cb)=>{
    fileCheckType(file,cb);
}})

export default sellProductAvatars;