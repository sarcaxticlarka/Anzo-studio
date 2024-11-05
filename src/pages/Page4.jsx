import React from 'react'
import moon from './../assets/moon.mp4';

const Page4 = () => {
  return (
    <div className='h-screen relative p-3'>
    <div className='h-full w-full bg-black overflow-hidden rounded-[2vw]'>
      <video className='object-cover right-20 top-40 absolute' autoPlay loop muted src={moon}></video>
      <h1 className='font-[font6] text-gray-400 text-[20vw] relative left-28'>WHAT</h1>
      <h1 className='font-[font6] text-white text-[20vw] relative leading-[2vw]  left-28'>I DO</h1>
      <h4 className='text-white text-[1.2vw] absolute bottom-40 font-[font5] left-28'>I DESIGN AND DEVELOP</h4>
      <h4 className='text-gray-600 text-[1.2vw] absolute bottom-32 font-[font4] left-28'>MODERN, IMPACTFUL AND LUXURIOUS</h4>
      <h4 className='text-white text-[1.2vw] absolute bottom-24 font-[font5] left-28'>websites that seamlessly bridge your goals with needs of your clients.
      </h4>
    </div>
  </div>
  )
}

export default Page4
