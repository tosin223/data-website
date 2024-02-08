import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='mx-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible financing for </p>
                <ReactTyped className='md:text-5xl ml-3 md:ml-4 sm:text-4xl text-xl font-bold' strings={["BTB","BTC","SASS",]}typeSpeed={40} backSpeed={50} loop/>
            </div>    
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase your revenue for BTB, BTC, & SASS Platforms</p>
            <button className='bg-[#00DF9A] w-[200px] rounded-md font-medium my-6 mx-auto py-3 outline-none border-none'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero