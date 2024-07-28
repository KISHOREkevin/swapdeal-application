import React, { useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { baseurlSellProducts } from '../../api/api.js';
import toast, { Toaster } from 'react-hot-toast';
import LoaderScreen from '../Loader/LoaderScreen.jsx';
const Productdetail = () => {
  let { productid } = useParams();
  let userid = localStorage.getItem("userid");
  let [productDetail, setProductDetail] = useState({});
  let [loading, setLoading] = useState(false);
  let fetchData = async () => {
    try {
      let response = await axios.get(`${baseurlSellProducts}/${productid}`);
      let data = response.data;
      setProductDetail(data);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  useEffect(() => {

    setLoading(true);
    fetchData();
    setLoading(false);
  }, [])
  return (
    <>
      {loading ?
        <>
          <LoaderScreen />
        </>
        :
        <>
          <div className='flex justify-center items-center h-[100vh]' >
            <div className='w-[800px] p-3 rounded lg:flex block  space-x-2   shadow-2xl'>
              <div className='lg:w-1/2'  >
                <img src={productDetail.productimage} className='rounded-md h-[400px]' />
              </div>
              <div className='lg:w-1/2'>
                <h1 className='font-bold text-3xl'  >{productDetail.productname}</h1>
                <p className='text-[16px] text-wrap lg:h-[250px] h-[100px] overflow-y-scroll' >{productDetail.productdescription}
                </p>
                <h3 className='text-xl font-bold'>{`price : ₹${productDetail.productprize}`}</h3>
                <Link to={`/users/user/${productDetail.sellerid}`} className=' hover:text-blue-600 hover:underline '> <p>View seller detail...{">>"}</p></Link>

                {localStorage.length === 0 ?
                  <button onClick={() => toast.error("Signup or Signin to buy")} className="m-1 p-2 text-white bg-tertiary w-full rounded-md">Buy Now</button>
                  :
                  <Link to={`/users/user/${userid}/${productid}/buy-now`}><button className="m-1 p-2 text-white bg-tertiary w-full rounded-md">Buy Now</button></Link>
                }
              </div>
            </div>
            <Toaster />
          </div>

        </>
      }

    </>
  )
}

export default Productdetail
