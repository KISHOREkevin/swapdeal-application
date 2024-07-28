import React,{useState} from 'react'
import toast, { Toaster } from 'react-hot-toast'
import axios from "axios";
import { baseurlUsers } from '../../../api/api';
import Loader from '../../Loader/Loader';
import { useNavigate } from 'react-router-dom';
const Signin = () => {
  let navigate = useNavigate();
  let [inputData,setInputData] = useState({
    useremail:"",
    userpassword:""
  });
  let [loading,setLoading] = useState(false);
  let inputHandler = (e)=>{
      let {name,value} = e.target;
      setInputData((prev)=>{
        return {
          ...prev,
          [name]:value
        }
      })
  }

  let submitHandler = async (e)=>{
      setLoading(true);
      e.preventDefault();
      try {
        let response = await axios.post(`${baseurlUsers}/user-auth`,inputData);
        let data = response.data;
        localStorage.setItem("userid",data.existingUser._id);
        localStorage.setItem("useremail",data.existingUser.useremail);
        setTimeout(()=>{
          toast.success(data.message);
        },1000)
        navigate(`/`);

      } catch (error) {
        toast.error(error.response.data.message);
      }
      setLoading(false);
  }
  return (
    
   <div className='w-full flex justify-center mt-52 ' >
   <form onSubmit={submitHandler} className='bg-secondary p-5 w-[500px] rounded-md shadow-lg '>
    
     <label className='text-xl text-white' htmlFor="useremail">Enter the email :</label><br />
     <input onChange={inputHandler} className='w-full text-2xl rounded-md ' type="email" name="useremail" id="useremail" required /><br />
     <label className='text-xl text-white' htmlFor="userpassword">Enter the password :</label><br />
     <input onChange={inputHandler}  className='w-full text-2xl rounded-md ' type="password" name="userpassword" id="userpassword" required /><br />
      {
        loading ? 
        <button type='submit' disabled className='w-full  p-2 bg-gray-600 text-white mt-2 rounded-md' >Submit <Loader/> </button>
        :
        <button type='submit' className='w-full p-2 bg-primary text-white mt-2 rounded-md' >Submit</button>
      }
     
   </form>
   <Toaster />
</div>    
  )
}

export default Signin