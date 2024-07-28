import React, { useEffect, useState } from 'react'

import User from './User'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseurlBuyProducts } from '../../../../api/api.js';

const Users = () => {
  let [users,setUsers] = useState([]);
  let {productid} = useParams();
  let [errormsg,setErrormsg] = useState("");
  let fetchData = async ()=>{
    try {
      let response = await axios.get(`${baseurlBuyProducts}/product-by-product/${productid}`);
      let data = response.data;
      setUsers(data);
    } catch (error) {
      setErrormsg(error.response.data.message);
    }
  }

  
  useEffect(()=>{
    fetchData();
  })
  
  let deleteHandler = async (id)=>{
    await axios.delete(`${baseurlBuyProducts}/delete-product/${id}`);
    let response = await axios.get(`${baseurlBuyProducts}/product-by-product/${productid}`);
    let data = response.data;
    setUsers(data);
  }

  return (
    <>
    <div className='w-full p-3 '>

      {errormsg==="" ? 
        users.map((user)=>{
          return <User user={user} deletehandler={deleteHandler}  />
       }) 
        :
        <>
          <h1 className='text-3xl font-bold text-center w-full'>{errormsg}</h1>
        </>
        
        }
        
       
      
    </div>
    </>
  )
}

export default Users