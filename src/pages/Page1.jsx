import React, { useRef, useState } from 'react'
import TiltText from '../components/TiltText'
import Page1Bottom from '../components/Page1Bottom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap' 

const Page1 = () => {
  const tiltRef = useRef(null)
  const [xVal, setXVal] = useState(0)
  const [yVal, setYVal] = useState(0)

  const mouseMove = (e) => {
    setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width / 2) / 70)
    setYVal((e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height / 2) / 20)
  }

  useGSAP(function(){
    gsap.to(tiltRef.current,{
      transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration: 5,
      ease: 'power4.out'
    })
  },[xVal, yVal] )


  return (
    <div id='page1' onMouseMove={(e) => {
      mouseMove(e)
    }} className='h-screen px-4 py-5 bg-white'>
      <div id='page1-in'  className='relative shadow-xl p-8 shadow-gray-600 h-full w-full rounded-[3vw] bg-cover bg-black bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_2964,h_1668,fp_0.69_0.64,q_90,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)]'>
        <img className='h-20 ml-10' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_158,h_158,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png" alt="" />
         
       <TiltText tiltAnim={tiltRef} />
        <Page1Bottom />
      </div>


    </div>
  )
}

export default Page1

