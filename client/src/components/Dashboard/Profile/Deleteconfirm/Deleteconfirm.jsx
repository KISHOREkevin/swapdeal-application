import React, { useState } from 'react'
import {useNavigate, useParams} from "react-router-dom"
import axios from "axios";
import { baseurlUsers } from '../../../../api/api.js';
import Loader from '../../../Loader/Loader.jsx';
const Deleteconfirm = () => {
  let {userid} = useParams();
  let navigate = useNavigate();
  let [loading,setLoading] = useState(false);
  let deleteAccountHandler = async ()=>{
    setLoading(true);
    try {
      await axios.delete(`${baseurlUsers}/delete-user/${userid}`);
      localStorage.clear();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  return (
    <div className='flex justify-center items-center mt-56'>
        <div className='border-2 border-primary border-solid rounded-md p-5'>
            <h3 className='text-2xl font-bold my-5'>Did you want to delete your account ?</h3>
            <div className='flex space-x-1 my-5'>
              {loading ? 
                <button disabled className='w-1/2 bg-gray-600 text-white p-3'>Yes <Loader/> </button>
              :
                <button onClick={()=>deleteAccountHandler()}  className='w-1/2 bg-red-600 text-white p-3'>Yes</button>
              }
                
                <button onClick={()=> navigate(-1)}  className='w-1/2 bg-secondary text-white p-3'>No</button>
            </div>
        </div>
    </div>
  )
}

export default Deleteconfirm