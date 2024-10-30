import React from 'react'

const Page5 = () => {
  return (
    <div className='h-screen relative p-3'>
      <div className='h-full w-full  bg-black overflow-hidden rounded-[2vw]'>
        <video className='h-full w-full object-cover ' autoPlay loop muted src="https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/480p/mp4/file.mp4"></video>
        <h1 className='font-[font6] text-white text-[40vw] absolute -bottom-44 left-20'>ABOUT</h1>
      </div>
    </div>
  )
}

export default Page5
