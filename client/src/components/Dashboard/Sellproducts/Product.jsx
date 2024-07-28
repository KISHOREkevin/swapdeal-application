import React from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios'
const Product = ({product,userid,deleteHandler}) => {

  return (
    <div>
       <div className="p-2 m-2 h-[420px] bg-final rounded-md shadow-2xl">
            <img src={product.productimage} width={250}  className="rounded lg:w-[250px] w-[300px]  h-[250px]"  />
           <Link to={`/products/product/${product._id}`} > <h2 className="font-bold text-2xl" >{product.productname}</h2></Link>
            <p className="text-xl">{`price : ${product.productprize}`}</p>
            <div className='flex'>
              <Link  to={`/users/user/${userid}/${product._id}/update-product`} className="w-1/2 m-1 p-2 text-white bg-tertiary rounded-md text-center"><button >Update</button></Link>
              <button onClick={()=>{deleteHandler(product._id)}} className="w-1/2 m-1 p-2 text-white bg-red-600 rounded-md">Delete</button>
            </div>
            <Link to={`/users/user/${userid}/${product._id}/users`}><p className='text-blue-600 underline text-center mt-5'>view users ..</p></Link>
        </div>

    </div>
  )
}

export default Product