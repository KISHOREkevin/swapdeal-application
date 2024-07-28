import React from "react";
import Product from "./Product";
const Products = ({products})=>{

    return(
        <>
         <div className="m-3 flex  flex-wrap">
            {products.map((product)=>{
                return <Product key={product._id} product={product} />
            })}
            
           
        </div>
        </>
    )
}

export default Products