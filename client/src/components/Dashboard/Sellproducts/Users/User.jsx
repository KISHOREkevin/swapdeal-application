import React from 'react'

import { Link } from 'react-router-dom'
const User = ({user,deletehandler}) => {
  
  return (
    <>
    
    <div className='lg:flex p-3 border-2 border-solid border-secondary rounded-md hover:bg-secondary hover:text-white'>
    
     
         <Link className='flex-grow lg: p-3  hover:underline' to={`/users/user/${user.buyerid._id}`} ><h2>{user.buyerid.username}</h2></Link>
         <div className='lg:p-2 lg:flex lg:space-x-2'>
             <h3>{user.buyerid.userphno}</h3>
             <p>Totalprice:₹{user.totalprice}</p>
             <p>quantity: {user.quantity}</p>
             <button onClick={()=>deletehandler(user._id)}  className='p-1 lg:w-52 w-full  bg-red-600 text-white rounded-md'>yeah he got</button>
         </div>
       
        

    </div>
    
    </>
  )
}

export default User
