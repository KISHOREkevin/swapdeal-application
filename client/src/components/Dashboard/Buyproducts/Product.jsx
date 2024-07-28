import React from 'react'

import { Link } from 'react-router-dom'
const Product = ({product}) => {
  return (
    <div>
       <div className="p-2 m-2  bg-final rounded-md shadow-2xl">
            <img src={product.productid.productimage} width={300} className="rounded"  />
           <Link to={`/products/product/${product.productid._id}`} > <h2 className="font-bold text-2xl" >Shoe</h2></Link>
           <p className="text-xl">Quantity : {`${product.quantity}`}</p>
            <p className="text-xl">Totalprice : ₹{`${product.totalprice}`}</p>
            <Link to={`/users/user/${product.sellerid}`}><p className='text-blue-600 underline '>View seller detail {`>> `}</p></Link>

        </div>

    </div>
  )
}

export default Product