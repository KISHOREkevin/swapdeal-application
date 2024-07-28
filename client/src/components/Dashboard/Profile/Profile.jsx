import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios"
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import { baseurlUsers } from "../../../api/api.js";
const Profile = () => {
    let navigate = useNavigate();
    let { userid } = useParams();
    let useremail = localStorage.getItem("useremail");
    let [userdata, setUserdata] = useState({});
    let [hidden, setHidden] = useState(false);
    let hamburgermenu = () => {
        setHidden(!hidden);
    }
    useEffect(() => {
        let fetchData = async () => {
            try {
                let response = await axios.get(`${baseurlUsers}/user/${userid}`);
                let data = response.data;
                setUserdata(data);
            } catch (error) {

                toast.error(error.response.data.message);

            }
        }

        fetchData();
    }, [])
    let logoutHandler = () => {
        localStorage.clear();
    }

    return (

        <>
            {
                useremail === userdata.useremail ?


                    <>
                        {hidden ?
                            <button onClick={hamburgermenu} className='lg:hidden  p-3'  > <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                                <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
                            </svg> </button>

                            :
                            <button onClick={hamburgermenu} className='lg:hidden p-3'  > <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                                <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                            </svg> </button>

                        }
                        <div className="flex">
                            <Sidebar userid={userid} hidden={hidden} />
                            <div className='bg-tertiary m-10    lg:flex  space-x-3 p-5 rounded shadow-md  '>
                                <div className='lg:w-1/2 flex justify-center items-center' >
                                    <img src={userdata.userimage} width={700} />
                                </div>
                                <div className='lg:w-1/2 flex justify-center  flex-col'>
                                    <h1 className='font-bold text-3xl '  >{userdata.username}</h1>
                                    <Link className='text-3xl'>{userdata.useremail}</Link>
                                    <address className='text-xl' >{userdata.useraddress}</address>
                                    <p className='text-2xl font-bold'>{userdata.userphno}</p>
                                    <div className="mt-10 ">
                                        <Link to={`/users/user/${userid}/update-user`}><button className="w-1/2 bg-secondary text-white p-3 rounded-md">Update Account</button></Link>
                                        <Link to={`/users/user/${userid}/delete-prompt`}><button className="w-1/2 bg-red-600 text-white p-3 rounded-md">Delete Account</button></Link>
                                    </div>
                                    <Link to={"/"}><button onClick={logoutHandler} className="w-full bg-primary text-white mt-3 p-3 rounded-md">Logout</button></Link>
                                </div>
                            </div>
                        </div>
                    </>

                    :
                    navigate("/auth/sign-in")
            }

        </>
    )
}

export default Profile;

