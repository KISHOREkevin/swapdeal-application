import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { baseurlSellProducts } from '../../../api/api';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../../Loader/Loader';

const Updateproduct = () => {
  let navigate = useNavigate()
  let [productname,setProductname] = useState("");
  let [productdescription,setProductdescription] = useState("")
  let [productprize,setProductprize] = useState(0);
  let [productimage,setProductimage] = useState("");
  let [loading,setLoading] = useState(false);
  let {productid} = useParams();
  let userid = localStorage.getItem("userid");
  useEffect(()=>{
    let fetchData = async ()=>{
      try {
        let response = await axios.get(`${baseurlSellProducts}/${productid}`);
        let data = response.data;
        setProductname(data.productname);
        setProductdescription(data.productdescription);
        setProductprize(data.productprize);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }

    fetchData();
  },[]);

  let submitHandler = async (e)=>{
    setLoading(true);
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("productname",productname);
    formdata.append("productdescription",productdescription);
    formdata.append("productprize",productprize);
    formdata.append("productimage",productimage);
    try {
      let response = await axios.put(`${baseurlSellProducts}/update-product/${userid}/${productid}`,formdata);
      let data = response.data;
      setTimeout(()=>{
        toast.success(data.message);
      },1000)
      navigate(`/users/user/${userid}/sell-products`);
    } catch (error) {
      toast.error(error);
    }

    setLoading(false);
  }

  return (
    <div className='w-full flex justify-center mt-32' >
    <form onSubmit={submitHandler} className='bg-secondary w-[500px]  p-5 rounded-md shadow-lg '>
      <label htmlFor="productname" className='text-xl text-white' >Enter product name :</label><br />
      <input onChange={e=>setProductname(e.target.value)} className='w-full text-2xl rounded-md '  type="text" value={productname} name="productname" id="productname" required /><br />
      <label className='text-xl text-white' htmlFor="productdescription"> Enter product description :</label><br />
      <textarea onChange={e=>setProductdescription(e.target.value)}  className='w-full text-2xl rounded-md ' value={productdescription} name="productdescription" id="productdescription" required></textarea>
      <label className='text-xl text-white' htmlFor="productprize">Enter product prize:</label><br />
      <input onChange={e=>setProductprize(e.target.value)} className='w-full text-2xl rounded-md ' type="number" value={productprize} name="productprize" id="productprize" required /><br />
      <label className='text-xl text-white' htmlFor="productimage">Upload product image :</label><br />
      <input onChange={e=>setProductimage(e.target.files[0])} className='w-full rounded-md ' type="file" name="productimage" id="productimage" required /><br />
      {
        loading ? 
        <button type='submit' disabled className='w-full p-2 bg-gray-600 text-white mt-2 rounded-md' >Update product <Loader /></button>  
        :
        <button type='submit' className='w-full p-2 bg-primary text-white mt-2 rounded-md' >Update product</button>
      }
    </form>
    <Toaster />
 </div>


  )
}

export default Updateproduct