import React, { useEffect, useState } from 'react'
import axios from "axios"
import Products from './Products/Products'
import { baseurlSellProducts } from '../../../api/api.js';
const Homemain = () => {
  let [products,setProducts] = useState([]);
  let [errormsg,setErrormsg] = useState("");
  let [loading,setLoading] = useState(false);
  let fetchData = async ()=>{
    try {
      let response = await axios.get(`${baseurlSellProducts}`);
      let data = response.data;
      setProducts(data);
    } catch (error) {
      setErrormsg(error.response.data.message);
    }
  } 
  useEffect(()=>{
    setLoading(true);

    fetchData();

    setLoading(false);
  },[])
  return (
    <>
      <div className='p-3 text-center border-tertiary border-4 m-2 rounded-md border-double' >
        <h1 className='p-2 font-bold text-3xl'>Welcome to our site , here you can sell or buy products ...</h1>
        
      </div>

      <Products products={products} errormsg={errormsg} />
    </>
  )
}

export default Homemain