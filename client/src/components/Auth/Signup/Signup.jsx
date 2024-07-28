import React, { useState } from 'react'
import axios from "axios";
import { baseurlUsers } from '../../../api/api.js';
import toast,{Toaster} from "react-hot-toast";
import {useNavigate} from "react-router-dom";
const Signup = () => {
  let navigate = useNavigate();
  let [username,setUsername] = useState("");
  let [useremail,setUseremail] = useState("");
  let [userpassword,setUserpassword] = useState("");
  let [userphno,setUserphno] = useState(0);
  let [useraddress,setUseraddress] = useState("");
  let [userimage,setUserimage] = useState("");
  let [loading,setLoading] = useState(false);
  
  let submitHandler = async (e)=>{
    setLoading(true);
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("username",username);
    formdata.append("useremail",useremail);
    formdata.append("userpassword",userpassword);
    formdata.append("userphno",userphno);
    formdata.append("useraddress",useraddress);
    formdata.append("userimage",userimage);
    try {
     
     let response =  await axios.post(`${baseurlUsers}/create-user`,formdata);
     let data = response.data;
     setTimeout(()=>{
      toast.success(data.message);
     },1000)
     navigate(`/auth/sign-in`);
    } catch (error) {
      toast.error(error.response.data.message);
    }
    setLoading(false);
  }




  
  return (
   <>
  
   <div className='w-full flex justify-center mt-20' >
      <form onSubmit={submitHandler} className='bg-secondary w-[500px]  p-5 rounded-md shadow-lg '>
     
        <label htmlFor="username" className='text-xl text-white' >Enter the username :</label><br />
        <input onChange={(e)=>setUsername(e.target.value)} className='w-full text-2xl rounded-md '  type="text" name="username" id="username" required /><br />
        <label className='text-xl text-white' htmlFor="useremail">Enter the email :</label><br />
        <input onChange={(e) => setUseremail(e.target.value)} className='w-full text-2xl rounded-md ' type="email" name="useremail" id="useremail" required /><br />
        <label className='text-xl text-white' htmlFor="userpassword">Enter the password :</label><br />
        <input onChange={e => setUserpassword(e.target.value)} className='w-full text-2xl rounded-md ' type="password" name="userpassword" id="userpassword" required /><br />
        <label className='text-xl text-white' htmlFor="userphno">Enter your phone number :</label><br />
        <input onChange={e => setUserphno(e.target.value)}  className='w-full text-2xl rounded-md ' type="number" name="userphno" id="userphno" required /><br />
        <label className='text-xl text-white' htmlFor="useraddress">Enter your address :</label><br />
        <textarea onChange={e => setUseraddress(e.target.value)} className='w-full text-2xl rounded-md ' name="useraddress" id="useraddress" required></textarea><br />
        <label className='text-xl text-white' htmlFor="userimage">Upload your image :</label><br />
        <input onChange={e => setUserimage(e.target.files[0])}   className='w-full rounded-md ' type="file" accept='image/*' name="userimage" id="userimage" required /><br />
        {loading ? 
          <button type='submit' disabled className='w-full  p-2 bg-gray-600 text-white mt-2 rounded-md' >Submit <div class="border-gray-300 h-3 w-3 animate-spin rounded-full border-2 border-t-blue-600 inline-block" /> </button>
        :
        <button type='submit' className='w-full p-2 bg-primary text-white mt-2 rounded-md' >Submit</button>
        }
        
      </form>
      <Toaster />
   </div>
   </>
  )
}

export default Signup