import React, { useEffect, useState } from 'react'
import axios from "axios"
import {useNavigate, useParams} from "react-router-dom";
import { baseurlBuyProducts, baseurlSellProducts } from '../../api/api.js';
import toast from 'react-hot-toast';
import Loader from '../Loader/Loader.jsx';
const Buyproduct = () => {
  let navigate = useNavigate();
  let {productid,userid} = useParams()

  let [productDetail,setProductdetail] = useState({});
  let [inputData,setInputdata] = useState(1);
  let [loading,setLoading] = useState(false);
  let fetchData= async ()=>{
    try {
      let response = await axios.get(`${baseurlSellProducts}/${productid}`);
      let data = response.data;
      setProductdetail(data);
    } catch (error) {
      toast.error(error.message);
    }
  }
  useEffect(()=>{
      fetchData()
  },[])

  let submitHandler = async (e)=>{
    e.preventDefault();
    setLoading(true);
    try {
      let response = await axios.post(`${baseurlBuyProducts}/create-product/${userid}/${productid}`,{quantity:inputData});
      let data = response.data;
      setTimeout(()=>{
        toast.success(data.message);
      })
      navigate(`/users/user/${userid}/buy-products`);
    } catch (error) {
      toast.error(error.response.data.message);
    }
    setLoading(false);
  }
  return (
    <div className='flex justify-center m-10  items-center mt-52 border-2 border-secondary border-solid'>
      <div className=' lg:flex space-x-2 '>
      <div className='p-10'>
          <h1 className='text-3xl font-bold '>{productDetail.productname}</h1>
          <h3 className='text-xl font-bold'>{`Price : ${productDetail.productprize}`}</h3>
          <h4 className='text-xl font-bold'>{`totalprize : ${inputData* productDetail.productprize}`}</h4>
        </div>
        <div className='p-10'>
          <form onSubmit={submitHandler}>
            <label htmlFor="quantity">Enter the quantity of the product:</label><br />
            <input onChange={e => setInputdata(e.target.value)} type="number" className='text-2xl w-full' id='quantity' name='quantity' value={inputData}/><br />
           {loading ? 
             <button type='submit' className='bg-gray-600 text-white p-3 mt-3 w-full rounded-md' >Buy now <Loader/> </button>
           :
            <button type='submit' className='bg-secondary text-white p-3 mt-3 w-full rounded-md' >Buy now</button>
           }
          </form>

        </div>
      </div>
       
    </div>
  )
}

export default Buyproduct