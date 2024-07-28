import React, { useEffect, useState } from 'react'
import Products from './Products/Products'

import {Link, useParams} from "react-router-dom"
import axios from 'axios'
import { baseurlSellProducts, baseurlUsers } from '../../api/api.js'
const Userdetail = () => {
  let {userid:sellerid} = useParams();
  let [userdetail,setUserdetail] = useState({});
  let [userproducts,setUserproducts] = useState([]);
  let [loading,setLoading] = useState(false);
  let [errormsg,setErrormsg] = useState("");
  let [userProductError,setUserproducterror] = useState("");
  let fetchData = async ()=>{
    try {
      let response = await axios.get(`${baseurlUsers}/user/${sellerid}`);
      let data = response.data;
      setUserdetail(data);
    } catch (error) {
      setErrormsg(error);
    }
  }
  let fetchUserProduct = async ()=>{
    try {
      let response = await axios.get(`${baseurlSellProducts}/sell-products/${sellerid}`);
      let data = response.data;
      setUserproducts(data);
    } catch (error) {
      setUserproducterror(error.response.data.message);
    }
  }
  useEffect(()=>{
    setLoading(true);
    fetchData();
    fetchUserProduct();
    setLoading(false);
  })
  return (
    <>
    <div className='bg-tertiary m-10 lg:flex block  text-white  space-x-2 p-5 rounded shadow-md '>
      <div className='lg:w-1/2' >
        <img src={userdetail.userimage} />
      </div>
      <div className='lg:w-1/2 flex justify-center flex-col'>
        <h1 className='font-bold text-3xl'  >{userdetail.username}</h1>
        <Link to={"mailto:email@email.com"} className='text-3xl  hover:text-blue-900 hover:underline'>{userdetail.useremail}</Link>
        <address className='text-xl' >{userdetail.useraddress}</address>
        <p className='text-2xl font-bold'>{userdetail.userphno}</p>
      </div>
    </div>
    <div>
      {
        userProductError === "" ? 
          <>
            <Products products={userproducts} />
          </>   
        
        :
          <>
            <h1 className='text-3xl font-bold text-center w-full'>{userProductError}</h1>
          </>

      }
      
    </div>
    </>
  )
}

export default Userdetail
