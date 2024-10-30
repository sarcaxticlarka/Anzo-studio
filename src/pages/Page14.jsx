import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import Banner from '../components/Banner'

const Page14 = () => {
    useGSAP(function(){
        gsap.to("div #react",{
            rotate: 360,
            duration:3,
            repeat: -1,
            ease: 'linear'  
          })
     })

    return (
        <div className='h-screen w-full px-4 py-5 bg-white '>
            <div id='page1-in' className='relative shadow-xl p-8 shadow-gray-600 h-full w-full rounded-[3vw] bg-cover bg-black bg-[url(https://static.wixstatic.com/media/f1c650_1baf8f9dcad444669565ec73ee697a92~mv2.jpg/v1/fill/w_2964,h_1668,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Background%20Anzo_Studio.jpg)]'>
                <div className="left h-full w-[35]   absolute -top-10 left-16">
                    <h1 className='font-[font6] text-white text-[22vw]'>GOT <span className='font-[font6] text-[#9b9b9b] text-[22vw]'>AN</span></h1>
                    <h1 className='font-[font6] text-white text-[22vw] leading-4'>IDEA</h1>

                    <div className="text-white absolute  flex flex-col bottom-5 left-5">
                    <h3 className='text-white font-[font2]'>IT IS NOT JUST ABOUT SOLVING THE PROBLEM</h3>
                    <h3 className='text-[#9b9b9b] font-[font2]'><span className='text-white font-[font2]'>BUT</span> OFFERING THE TRANSFORMATION!</h3>
                </div>
                </div>
                <div className="right flex absolute right-0 h-full w-[65%]   justify-center items-center">
                    <img id='react' className='scale-[.7]' src="https://static.wixstatic.com/media/f1c650_7a84fb38cb2d4bebb8b34004f66d4c3d~mv2.png/v1/fill/w_204,h_204,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/World%20Contact.png" alt="" />
                    <div className='h-32 w-1 bg-white'></div>
                    <div className='ml-8'>
                        <h3 className='text-[#9b9b9b] font-[font2] text-xl '>WORLD SERVICE</h3>
                        <h3 className='text-white font-[font3] text-xl'>I CAN COME TO WHEREVER YOU ARE.
                        </h3>
                        <h3 className='text-[#9b9b9b] font-[font2] text-xl '>+31 68 4564137</h3>
                    </div>
                    <h4 className='text-white absolute bottom-14 right-12 font-[font2]'>© 2024 Anzo.Studio™
                    </h4>

                </div>

            </div> 
        </div>
    )
}

export default Page14
