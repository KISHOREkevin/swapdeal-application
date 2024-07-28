import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import path from "path";

const multerStorage = new multer.diskStorage({
    filename:(req,file,cb)=>{
        cb(null,Date.now()+uuidv4()+path.extname(file.originalname));
    },
    destination:(req,file,cb)=>{
        cb(null,"uploads/users");
    }
    
})

const fileCheckTypes = (file,cb)=>{
    let fileTypes = /jpg|jpeg|png/;
    let fileext = fileTypes.test(path.extname(file.originalname).toLowerCase());
    let mimetype = fileTypes.test(file.mimetype);
    if(fileext && mimetype){
        return cb(null,true);    
    }else{
        cb("Error : the supported file types are (jpg,jpeg,png) ..");
    }
}

let userAvatars = multer({storage:multerStorage,fileFilter:(req,file,cb)=>{
    fileCheckTypes(file,cb);
}})

export default userAvatars;