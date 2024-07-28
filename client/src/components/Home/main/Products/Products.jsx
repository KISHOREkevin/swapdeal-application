import React from "react";
import Product from "./Product";
const Products = ({products,errormsg})=>{

    return(
        <>
        <div className="m-3 flex flex-wrap">
            
            { errormsg===""? 
                 products.map((product)=>{
                        return  <Product key={product._id} product={product} />
                    })
            :
                    <h1 className="text-3xl font-bold text-center w-full">{errormsg}</h1>
           }
           
          
        </div>
        </>
    )
}

export default Products