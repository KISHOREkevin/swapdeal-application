import React from "react";

import { Link } from "react-router-dom";
import toast from "react-hot-toast";
const Product = ({product})=>{
    let userid = localStorage.getItem("userid");

    return (
        <>
        <div className="p-2 m-2  bg-final rounded-md shadow-2xl">
            <img src={product.productimage} width={300} className="rounded h-[250px] lg:w-[300px] w-[350px]  "  />
           <Link to={`/products/product/${product._id}`} > <h2 className="font-bold text-2xl" >{product.productname}</h2></Link>
            <p className="text-xl">{`price : ₹${product.productprize}`}</p>
            {localStorage.length ===0 ? 
                <button onClick={()=> toast.error("Signup or Signin to buy")} className="m-1 p-2 text-white bg-tertiary rounded-md">Buy Now</button>
            :
                <Link to={`/users/user/${userid}/${product._id}/buy-now`}><button className="m-1 p-2 text-white bg-tertiary rounded-md">Buy Now</button></Link>
            }
            
        </div>
        </>
    )
}

export default Product;