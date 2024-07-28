import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { baseurlUsers } from '../../../../api/api.js';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import Loader from '../../../Loader/Loader.jsx';

const Updateuser = () => {
  let navigate = useNavigate();
  let [username, setUsername] = useState("");
  let [useremail, setUseremail] = useState("");
  let [userphno, setUserphno] = useState(0);
  let [useraddress, setUseraddress] = useState("");
  let [userimage, setUserimage] = useState("");
  let [loading, setLoading] = useState(false);
  let { userid } = useParams();
  let email = localStorage.getItem("useremail");

  useEffect(() => {
    let fetchData = async () => {
     
      try {
        let response = await axios.get(`${baseurlUsers}/user/${userid}`);
        let data = response.data;
        setUsername(data.username);
        setUseremail(data.useremail);
        setUserphno(data.userphno);
        setUseraddress(data.useraddress);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    
    }

    fetchData();
  }, [])

  let submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("username", username);
    formdata.append("useremail", useremail);
    formdata.append("userphno", userphno);
    formdata.append("useraddress", useraddress);
    formdata.append("userimage", userimage);
    try {
      let response = await axios.put(`${baseurlUsers}/update-user/${userid}`, formdata);
      let data = response.data;
      setTimeout(() => {
        toast.success(data.message);
      }, 1000);
      navigate(`/users/user/${userid}/profile`);
    } catch (error) {
      toast.error(error.response.data.message);
    }
    setLoading(false);
  }
  return (
    <>
      {
        email !== useremail ?
          navigate("/auth/sign-in")
          :
          <>
            <div className='w-full flex justify-center mt-24' >
              <form onSubmit={submitHandler} className='bg-secondary w-[500px]  p-5 rounded-md shadow-lg '>
                <label htmlFor="username" className='text-xl text-white' >Enter the username :</label><br />
                <input className='w-full text-2xl rounded-md ' onChange={e => setUsername(e.target.value)} value={username} type="text" name="username" id="username" required /><br />
                <label className='text-xl text-white' htmlFor="useremail">Enter the email :</label><br />
                <input className='w-full text-2xl rounded-md ' onChange={e => setUseremail(e.target.value)} value={useremail} type="email" name="useremail" id="useremail" required /><br />
                <label className='text-xl text-white' htmlFor="userphno">Enter your phone number :</label><br />
                <input className='w-full text-2xl rounded-md ' onChange={e => setUserphno(e.target.value)} value={userphno} type="number" name="userphno" id="userphno" required /><br />
                <label className='text-xl text-white' htmlFor="useraddress">Enter your address :</label><br />
                <textarea className='w-full text-2xl rounded-md ' onChange={e => setUseraddress(e.target.value)} value={useraddress} name="useraddress" id="useraddress" required ></textarea><br />
                <label className='text-xl text-white' htmlFor="userimage">Upload your image :</label><br />
                <input className='w-full rounded-md ' type="file" onChange={e => setUserimage(e.target.files[0])} name="userimage" id="userimage" required /><br />
                {loading ? 
                    <button type='submit' className='w-full p-2 bg-gray-600 text-white mt-2 rounded-md' >Submit <Loader /> </button>
                :
                    <button type='submit' className='w-full p-2 bg-primary text-white mt-2 rounded-md' >Submit </button>
                }
              </form>
            </div>
          </>
      }

    </>
  )
}

export default Updateuser