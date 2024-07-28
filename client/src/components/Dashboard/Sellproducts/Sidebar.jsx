import React from 'react'
import swapdealLogo from "../../../assets/swapdeal-logo.png"
import { Link } from 'react-router-dom'
const Sidebar = ({ userid, hidden }) => {
  return (
    <>
      {
        hidden ?
          <div className='w-60 shadow-lg  lg:visible  hidden   h-[100vh]'>
            <Link to={"/"}>
            <img src={swapdealLogo} width={200} className='inline-block m-2' />
            </Link>
            <div className='flex flex-col mt-10'>
              <Link to={`/users/user/${userid}/profile`} className='text-xl p-3 '>Profile</Link>
              <Link to={`/users/user/${userid}/sell-products`} className='text-xl p-3 bg-secondary text-white' >Sell Products</Link>
              <Link to={`/users/user/${userid}/buy-products`} className='text-xl p-3 '>Buy Products</Link>
            </div>
          </div>

          :

          <div className='w-60 shadow-lg lg:visible bg-final  lg:static  fixed  h-[100vh]'>
            <Link to={"/"}>
            <img src={swapdealLogo} width={200} className='inline-block m-2' />
            </Link>
            <div className='flex flex-col mt-10'>
              <Link to={`/users/user/${userid}/profile`} className='text-xl p-3 '>Profile</Link>
              <Link to={`/users/user/${userid}/sell-products`} className='text-xl p-3 bg-secondary text-white' >Sell Products</Link>
              <Link to={`/users/user/${userid}/buy-products`} className='text-xl p-3 '>Buy Products</Link>
            </div>
          </div>

      }

    </>
  )
}

export default Sidebar