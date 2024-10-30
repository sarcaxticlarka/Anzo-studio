import React from 'react'

const TiltText = (props) => {
  return (
    <div id='tiltDiv' ref={props.tiltAnim} className='mt-44 ml-12'>
    <h1 className='text-[3vw] leading-[3.5vw] ml-1  text-white uppercase font-[font3]'>I am dark <span className='text-black font-[font1]'> DARK MODE <span className='text-white font-[font3]'>™</span></span></h1>
    <h1 className='text-white font-[font3] leading-[6.5vw] text-[8vw] '>DESIGNER</h1>
    <h1 className='text-white uppercase leading-[4.5vw]  text-[5vw] font-[font3]'>To Hire</h1>
  </div>
  )
}

export default TiltText
