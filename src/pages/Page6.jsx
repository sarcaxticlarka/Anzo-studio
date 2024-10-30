 import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
 
 const Page6 = () => {
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(function () {
        gsap.from(".texttilt", {
            transform: "rotateX(-70deg)",
            opacity: 0,
            duration: 1,
            stagger: 1,
            scrollTrigger: {
                trigger: ".texttilt",
                // markers:true,
                start: "top 60%",
                end: "top -270%",
                scrub: 2
            }
        })
    })
   return (
    <div id='section3' className='bg-white text-center text-black p-10'>
        <div className='texttilt '>
                <h1 className='text-[42vw] leading-[45vw] text-black font-[font6]'>HELPING</h1>
            </div>
            <div className='texttilt'>
                <h1 className='text-[42vw] leading-[33vw] text-[#9B9B9B] font-[font6]'>MY</h1>
            </div>
            <div className='texttilt '>
                <h1 className='text-[42vw] leading-[33vw] text-black font-[font6]'>CLIENTS</h1>
            </div>
            <div className='texttilt '>
                <h1 className='text-[42vw] leading-[33vw] text-black font-[font6]'>TO ACHIEVE</h1>
            </div>
            <div className='texttilt '>
                <h1 className='text-[42vw] leading-[33vw] text-[#9B9B9B] font-[font6]'>THEIR</h1>
            </div>
            <div className='texttilt '> 
                <h1 className='text-[42vw] leading-[33vw] text-black font-[font6]'>DREAMS</h1>
            </div>
       
     </div>
   )
 }
 
 export default Page6
 