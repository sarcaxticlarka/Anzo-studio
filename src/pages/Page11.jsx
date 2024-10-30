import React from 'react';

const Page11 = () => {
  return (
    <div className="w-full overflow-y-scroll pb-20"> 
      <div
        id="page1-in"
        className="relative h-screen w-full bg-cover bg-fixed bg-center bg-[url('https://static.wixstatic.com/media/f1c650_8b19a36c22b44b04aa056d2f4482aeac~mv2.jpeg/v1/fill/w_999,h_864,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f1c650_8b19a36c22b44b04aa056d2f4482aeac~mv2.jpeg')]"
      >
        <img
          className="absolute top-0 left-0 w-full h-full object-cover "
          src="https://static.wixstatic.com/media/f1c650_360814da288f418991547fa9d5e08904~mv2.png/v1/fill/w_3024,h_2326,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/Subtract.png"
          alt=""
        />
      </div>
 
      <div className="flex flex-col items-center justify-center  bg-white"> 
        <img
          className="max-w-xs md:max-w-md lg:max-w-lg h-auto bg-cover"
          src="https://static.wixstatic.com/media/f1c650_50b3eb1a161343a6a87b1fe48cb27f9a~mv2.png/v1/fill/w_1285,h_1920,al_c,q_95,enc_auto/Astro%20Me.png"
          alt="Astro Theme"
        />
        {/* <p className="text-center mt-5 text-gray-700">
          Discover the mysteries of the universe with our Astro theme!
        </p> */}
      </div>
    </div>
  );
};

export default Page11;
