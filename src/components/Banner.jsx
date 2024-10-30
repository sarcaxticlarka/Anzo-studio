// Banner.js
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';

const Banner = () => {
  useGSAP(() => {
    gsap.to("#banner img", {
      rotate: 360,
      duration: 3,
      repeat: -1,
      ease: 'linear',
    });
  });

  return (
    <div id="banner" className='fixed bottom-5 right-4 flex flex-col gap-4 items-end justify-between p-4'>
      <img
        className='h-24 mr-2'
        src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_160,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png"
        alt="CSSDA Logo"
      />
      <img
        className='h-24'
        src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_160,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png"
        alt="EN Legend"
      />
    </div>
  );
};

export default Banner;
