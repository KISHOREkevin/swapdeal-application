import React, { useState } from 'react'
import swapdeallogo from "../../../assets/swapdeal-logo.png"
import { Link } from "react-router-dom"

const Homeheader = () => {
  let userid = localStorage.getItem("userid");
  let [hidden, setHidden] = useState(false);
  let hamburgermenu = () => {
    setHidden(!hidden);
  }
  return (
    <>
      {hidden ?
        <div>
          <nav className='shadow-md bg-tertiary'>
            <Link to={"/"}>
              <img src={swapdeallogo} width={200} className='inline-block m-2' /></Link>
            <button onClick={hamburgermenu}  className='lg:hidden float-end p-3'  > <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
<path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
</svg> </button>
            <div className='lg:float-end   lg:flex lg:flex-row lg: space-x-2  lg:m-3 lg:p-0 text-center p-2  flex flex-col '>

              <Link to={"/about"} className='p-3  hover:bg-primary hover:text-white hover:rounded-md ' >About</Link>

              {localStorage.length === 0 ?

                <>
                  <Link to={"/auth/sign-up"} className='p-3 bg-primary text-white rounded-md'>Signup</Link>
                  <Link to={"/auth/sign-in"} className='p-3 bg-secondary rounded-md'>Signin</Link>
                </>
                :
                <Link to={`/users/user/${userid}/profile`} className='p-3 bg-primary text-white rounded-md'>DashBoard</Link>
              }
            </div>
          </nav>
        </div>
        :
        <div>
          <nav className='shadow-md bg-tertiary'>
            <Link to={"/"}>
              <img src={swapdeallogo} width={200} className='inline-block m-2' /></Link>
            <button onClick={hamburgermenu} className='lg:hidden float-end p-3'  > <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
              <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
            </svg> </button>
            <div className='lg:float-end lg:flex lg:space-x-2 lg:m-3 hidden '>

              <Link to={"/about"} className='p-3  hover:bg-primary hover:text-white hover:rounded-md ' >About</Link>

              {localStorage.length === 0 ?

                <>
                  <Link to={"/auth/sign-up"} className='p-3 bg-primary text-white rounded-md'>Signup</Link>
                  <Link to={"/auth/sign-in"} className='p-3 bg-secondary rounded-md'>Signin</Link>
                </>
                :
                <Link to={`/users/user/${userid}/profile`} className='p-3 bg-primary text-white rounded-md'>DashBoard</Link>
              }
            </div>
          </nav>
        </div>
      }

    </>
  )
}

export default Homeheader