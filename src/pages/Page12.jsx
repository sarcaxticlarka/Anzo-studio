import React from 'react';

const Page12 = () => {
  return (
    <div className='h-screen relative p-3 pb-16'>
      <div className='h-full w-full relative bg-black overflow-hidden rounded-[2vw]'>
        <video
          className='h-full w-full object-cover'
          autoPlay
          loop
          muted
          src="https://video.wixstatic.com/video/11062b_fc7c8b8125a94b69ad7cad3b24a8093a/1080p/mp4/file.mp4"
        />
        <video
          className='object-cover right-16 rounded-full  top-40 absolute'
          autoPlay
          loop
          muted
          src="./src/assets/statue.mp4"
        />

        <div className='absolute inset-0 flex flex-col items-center justify-center z-50'>
          <div>
            <h1 className='font-[font6] text-white text-[10vw] text-center leading-[8vw]'>PERSONAL</h1>
            <p className='font-[font2] text-[#9b9b9b] text-[1.3vw] text-center'>Honesty, Communication, Punctuality</p>
          </div>
          <div>
            <h1 className='font-[font6] text-white text-[10vw] text-center'>PROFESSIONAL</h1>
            <p className='font-[font2] text-[#9b9b9b] text-[1.3vw] text-center -mt-12'>Photoshop, Wix Studio, Figma</p>
          </div>
          <div>
            <h1 className='font-[font6] text-white text-[10vw] text-center mt-10 leading-[8vw]'>ADDITIONAL</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page12;