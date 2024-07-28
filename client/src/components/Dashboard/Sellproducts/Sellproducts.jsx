import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Product from './Product'
import { Link, useParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { baseurlSellProducts } from '../../../api/api'

const Sellproducts = () => {
  let [products, setProducts] = useState([]);
  let [errormsg, setErrormsg] = useState("");
  let { userid } = useParams();
  let [hidden, setHidden] = useState(false);
  let hamburgermenu = () => {
    setHidden(!hidden);
  }
  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await axios.get(`${baseurlSellProducts}/sell-products/${userid}`);
        let data = response.data;
        setProducts(data);
      } catch (error) {
        setErrormsg(error.response.data.message);
      }
    }

    fetchData();
  }, []);

  let deleteProduct = async (productid) => {
    let response = await axios.delete(`${baseurlSellProducts}/delete-product/${productid}`);
    let data = response.data;
    toast.success(data.message);
    let productUpdate = await axios.get(`${baseurlSellProducts}/sell-products/${userid}`);
    setProducts(productUpdate.data);
  }

  return (
    <>
      {hidden ?
        <button onClick={hamburgermenu} className='lg:hidden  p-3'  > <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
          <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
        </svg> </button>

        :
        <button onClick={hamburgermenu} className='lg:hidden p-3'  > <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
          <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
        </svg> </button>

      }
      <div className='flex  '>
        <Sidebar userid={userid} hidden={hidden}  />
        <div className='w-full h-[100vh] overflow-y-scroll'>
          <div className='flex m-3'>
            <h3 className='flex-grow text-2xl font-bold text-center'>Sell Products</h3>
            <Link to={`/users/user/${userid}/add-product`}> <button className='p-3 rounded-md bg-secondary text-white'>Add Product</button></Link>
          </div>
          <div className='flex p-3  flex-wrap h-[100vh] '>
            {errormsg === "" ? products.map(product => {
              return <Product key={product._id} product={product} userid={userid} deleteHandler={deleteProduct} />
            })
              :
              <>
                <h1 className='text-3xl font-bold text-center w-full' >{errormsg}</h1>
              </>
            }


          </div>
        </div>
        <Toaster />
      </div>
    </>
  )
}

export default Sellproducts