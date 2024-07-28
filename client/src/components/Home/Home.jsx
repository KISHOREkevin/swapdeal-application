import React from 'react'
import Homeheader from './header/Homeheader'
import Homemain from './main/Homemain'
import { Toaster } from 'react-hot-toast'


const Home = () => {
  return (
    <>
        <Homeheader />
        <Homemain />
        <Toaster />
    </>
  )
}

export default Home