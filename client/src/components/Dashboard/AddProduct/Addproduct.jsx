import axios from 'axios';
import React, { useState } from 'react'
import { baseurlSellProducts } from '../../../api/api';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loader from '../../Loader/Loader';

const Addproduct = () => {
  let navigate = useNavigate();
  let [productname,setProductname] = useState("");
  let [productdescription,setProductDescription] = useState("");
  let [productprize,setProductPrize] = useState(0);
  let [productimage,setProductImage] = useState("");
  let [loading,setLoading] = useState(false);
  let userid = localStorage.getItem("userid");
  let submitHandler = async (e)=>{
    setLoading(true);
    e.preventDefault();
  
    let formdata = new FormData();
    formdata.append("productname",productname);
    formdata.append("productdescription",productdescription);
    formdata.append("productprize",productprize);
    formdata.append("productimage",productimage);
    try {
      let response = await axios.post(`${baseurlSellProducts}/create-product/${userid}`,formdata);
      let data = response.data;
      setTimeout(()=>{
        toast.success(data.message);
      },1000 )
      navigate(`/users/user/${userid}/sell-products`);
    } catch (error) {
       toast.error(error.response.data.message);
    }
    setLoading(false);

  }

  return (
    <div className='w-full flex justify-center mt-32' >
      <form onSubmit={submitHandler} className='bg-secondary w-[500px]  p-5 rounded-md shadow-lg '>
        <label htmlFor="productname" className='text-xl text-white' >Enter product name :</label><br />
        <input onChange={e => setProductname(e.target.value)} className='w-full text-2xl rounded-md '  type="text" name="productname" id="productname" required /><br />
        <label className='text-xl text-white' htmlFor="productdescription"> Enter product description :</label><br />
        <textarea onChange={e =>setProductDescription(e.target.value)}  className='w-full text-2xl rounded-md ' name="productdescription" id="productdescription" required></textarea>
        <label className='text-xl text-white' htmlFor="productprize">Enter product prize:</label><br />
        <input onChange={e => setProductPrize(e.target.value)}  className='w-full text-2xl rounded-md ' type="number" name="productprize" id="productprize" required /><br />
        <label className='text-xl text-white' htmlFor="productimage">Upload product image :</label><br />
        <input onChange={e =>setProductImage(e.target.files[0])} accept='image/*' className='w-full rounded-md ' type="file" name="productimage" id="productimage" required /><br />
        {loading ? 
          <button type='submit' disabled className='w-full p-2 bg-gray-600 text-white mt-2 rounded-md' >Add product <Loader /></button>
        :
          <button type='submit' className='w-full p-2 bg-primary text-white mt-2 rounded-md' >Add product</button>
        }
      </form>
      <Toaster />
   </div>
  )
}

export default Addproduct