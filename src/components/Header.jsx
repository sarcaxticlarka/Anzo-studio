import React, { useRef } from 'react';
import { gsap } from 'gsap';
import 'remixicon/fonts/remixicon.css';

const Header = () => {
  const iconRef = useRef(null);  

  const handleMouseEnter = () => {
    gsap.to(iconRef.current, { rotation: 90, duration: 0.3 });
  };

  const handleMouseLeave = () => {
    gsap.to(iconRef.current, { rotation: 0, duration: 0.3 });
  };

  return (
    <div className='fixed w-full z-10 py-20 px-16 flex items-center justify-end'>
      <button id='hireme' className='bg-black px-8 py-2 border-4 text-xl rounded-full text-white font-[font4]'>Hire me</button>
      <i
        ref={iconRef} // Attach the ref to the icon
        className="ri-grid-fill text-4xl ml-3 text-gray-600"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></i>
    </div>
  );
};

export default Header;
