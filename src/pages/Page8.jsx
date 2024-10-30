import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Page8 = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Scroll animation for the text in the "right" div
        gsap.utils.toArray(".right > div").forEach((section, index) => {
            gsap.fromTo(section,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "top 60%",
                        scrub: 1,
                    }
                }
            );
        });

        gsap.to(".rotating-img", {
            rotation: 360,
            duration: 12,
            repeat: -1,
            ease: "linear",
        });
    }, []);

    return (
        <div className='h-content w-full p-6 mt-[24vh]'>
            <div className='bg-black h-full w-full flex rounded-[2vw]'>
                <div className="left h-full w-[40%] px-16 ">
                    <h1 className='text-white text-[25vw] font-[font6]'>RIGHT</h1>
                    <h1 className='text-[#9b9b9b] leading-3 text-[25vw] font-[font6]'>FIT</h1>
                    <img className='rotating-img scale-75 -mt-32' src="./src/assets/circle.png" alt="" />
                    <div className='left-28 pb-8'>
                        <h4 className='text-[#9b9b9b] text-[1.2vw] font-[font2]'>SOUNDS GOOD?
                        </h4>
                        <h4 className='text-[#9b9b9b] text-[1.2vw] font-[font2]'>THEN PLEASE<span className='font-[font5] text-white'>  EMAIL ME</span> </h4>
                    </div>
                </div>
                <div className="right h-full w-[60%] py-28 px-8">
                    <div className='mb-6'>
                        <h2 className='text-[#9b9b9b] font-[font2] text-[1.2vw] '>PERSONALITY</h2>
                        <h1 className='text-white font-[font2] text-[1.3vw] leading-[1.6vw] '>Business relationships build on trust and compassion vs how can I get more for less +/-</h1>
                    </div>
                    <div className='mb-6'>
                        <h2 className='text-[#9b9b9b] font-[font2] text-[1.2vw] '>APPROACH</h2>
                        <h1 className='text-white font-[font2] text-[1.3vw] leading-[1.6vw] '>
                            Full dive into personality, goals and objectives with transparency of worq process vs template and unmanageable office routine +/-</h1>
                    </div>
                    <div className='mb-6'>
                        <h2 className='text-[#9b9b9b] font-[font2] text-[1.2vw] '>DESIGN</h2>
                        <h1 className='text-white font-[font2] text-[1.3vw] leading-[1.6vw] '>
                            Design that is actually functional and helps to achieve results is design that works +/-</h1>
                    </div>
                    <div className='mb-6'>
                        <h2 className='text-[#9b9b9b] font-[font2] text-[1.2vw] '>FIT</h2>
                        <h1 className='text-white font-[font2] text-[1.3vw] leading-[1.6vw] '>
                            The perfect suit is the one fits you vs the one you can fit in. Choose wisely you are investing in yourself! +/-</h1>
                    </div>
                    <div className='mb-6'>
                        <h2 className='text-[#9b9b9b] font-[font2] text-[1.2vw] '>CORE VALUES</h2>
                        <h1 className='text-white font-[font2] text-[1.3vw] leading-[1.6vw] '>
                            Time, trust and experience are resources we can not buy, yet we are sharing them and exchange +/-</h1>
                    </div>
                    <div className='mb-6'>
                        <h2 className='text-[#9b9b9b] font-[font2] text-[1.2vw] '>TO CONSIDER</h2>
                        <h1 className='text-white font-[font2] text-[1.3vw] leading-[1.6vw] '>
                            Your brand, your personal identity is the reflection of your passion and goals on your future; your first online impression matters +/-</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page8;
