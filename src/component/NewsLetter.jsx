import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full py-16 text-white px-6 md:px-4 lg:px-0'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-5'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips and tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay updated</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center  justify-between w-full'>
                    <input className='outline-none mr-4 px-4 p-3 w-full rounded-md text-black' placeholder='Enter mail'/>
                    <button className='text-black bg-[#00DF9A] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 outline-none border-none'>Notify me</button>
                </div>
                <p>We care about the protection of your data. Read our <span className='text-[#00DF9A]'><a href="">privacy policy</a></span></p>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter