import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Page7 = () => {
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(function () {
        gsap.from("#rotateimg", {
            transform: "rotate(90deg)", 
            duration: 1, 
            scrollTrigger: {
                trigger: ".imgr",
                // markers:true,
                // start: "top 50%",
                // end: "top -10%",
                start: "top 90%", // Start rotating 80% into viewport
                end: "bottom top",
                scrub: 2
            }
        })
    })
    useGSAP(function(){
        gsap.to("#designAnim img",{
            rotate: 360,
            duration:3,
            repeat: -1,
            ease: 'linear'  
          })
     })
     useGSAP(function(){
        gsap.to("#develop img",{
            transform: "rotateY(60deg)",
            duration:3,
            repeat: -1,
            ease: 'linear'  
          })
     })
     useGSAP(() => {
        gsap.to("#spent h4", {
            color: "#fff",  
            duration: 1,
            stagger: 0.2, 
            scrollTrigger: {
                trigger: "#spent",
                start: "top 80%",  
                end: "bottom 20%",  
                scrub: true,
            }
        });
    });
  return (
    <div className='imgr'>
      <div className='h-screen relative p-3'>
      <div className='h-[120vh] w-full   bg-black flex items-center justify-center overflow-hidden rounded-[2vw]'>
        <img id='rotateimg' className='h-[55vw] w-[65vw] object-cover  ' src="https://static.wixstatic.com/media/f1c650_e5c1c4b281ea418a8663a17e66f283f1~mv2.png/v1/fill/w_777,h_668,al_c,q_90,enc_auto/triangle%203.png" alt="" />
         <div className='absolute w-full flex justify-between top-8 px-20'>
            <div className="left">
                <h1 className='text-[20vw] text-gray-400 font-[font6]'>HOW</h1>
                <h1 className='text-[20vw] leading-[3vw] text-white font-[font6]'>CAN</h1>
            </div>
            <div className="right">
            <h1 className='text-[20vw] text-white font-[font6]'>I HELP</h1>
            <h1 className='text-[20vw] leading-[3vw] text-white font-[font6]'>YOU</h1>
            </div>
         </div>
         <div id='spent' className='absolute bottom-12 flex justify-between text-[#9b9b9b] gap-12  px-24 text-[1.2vw] font-[font5]'>
            <h4 className='font-[font5]'>I am a self-taught web and brand designer with a passion for creating unique and timeless masterpieces for ambitious professionals, entrepreneurs, artists, and boutique businesses. Bespoke Freelance for agencies.</h4>
            <h4 className='font-[font5]'>With a background in strategic marketing and acknowledged expertise in web development, I aim to minimize my client's resources spent on macro and micro-management, marketing research, and hiring a whole team of a larger agency.</h4>
            <h4 className='font-[font5]'>
            My mission is to drive exceptional growth for my clients by increasing their brand appearance, defining their identity, and engaging customers through captivating black-and-white aesthetics with a modern, luxurious, and minimalistic touch.</h4>
         </div>
         <div className='flex w-full absolute -bottom-28 px-48 justify-between '>
            <div id='designAnim' className='flex gap-4'>
                <img className='h-20 text-white' src="https://static.wixstatic.com/media/f1c650_67833facdc7a47d5aae7870d4fb7fc3e~mv2.png/v1/fill/w_136,h_136,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SUN.png" alt="" />
                <h1 className='text-white text-[5vw] font-[font6]'>DESIGN</h1>
            </div>
            <div id='develop' className='flex gap-4'>
                <img className='h-20 text-white' src="https://static.wixstatic.com/media/f1c650_027515148725478cbb3a91eca452cabf~mv2.png/v1/fill/w_130,h_130,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EARTH.png" alt="" />
                <h1 className='text-white text-[5vw] font-[font6]'>DEVELOPMEN</h1>
            </div>
            <div className='flex gap-4'>
                <img className='h-20 text-white' src="https://static.wixstatic.com/media/f1c650_b0000fd9a706421aa0ea84da62ae3354~mv2.png/v1/fill/w_130,h_130,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/START%20UP.png" alt="" />
                <h1 className='text-white text-[5vw] font-[font6]'>BRANDING</h1>
            </div>
         </div>
         <div className='absolute left-28 -bottom-40'>
            <h4 className='text-[#9b9b9b] text-[1.3vw] font-[font2]'>GOT A PROJECT?</h4>
            <h4 className='text-[#9b9b9b] text-[1.3vw] font-[font2]'>THEN PLEASE <span className='font-[font5] text-white'>CONTACT ME</span> </h4>
         </div>
      </div>
    </div>
    </div>
  )
}

export default Page7
