import React from 'react'

const Page3 = () => {
  return (
    <div className='h-screen relative flex justify-center items-center'>
      <img className='absolute z-10' src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_1254,h_721,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/try.png" alt="" />
      <video autoPlay loop muted className='z-20 h-[80vh] w-[61vw] relative' src="https://video.wixstatic.com/video/f1c650_ec0546cb7b10485c8753983f298c6ea4/360p/mp4/file.mp4"></video>
      <div className='h-[1px] w-[70%] top-[40%] bg-black absolute z-1'></div>
      <div className='h-[1px] w-[85%]  top-[55%] bg-black absolute z-1'></div>
      <div className='h-[1px] w-[90%]  top-[75%] bg-black absolute z-1'></div>
    </div>
  )
}

export default Page3
