import React from 'react';
//Images
import img1 from '../public/GroundZero-Banner.png';
import img2 from '../public/HammerTech-Banner.png';
import img3 from '../public/SoundDigital-Banner.png';
import img4 from '../public/Pioneer-Banner.png';

function Banner() {
  return (
    <>
      <img
        src={img1.src}
        alt="banner"
        className="w-[100%] h-[90%] md:w-[90%] xl:w-[90%] 2xl:w-[80%] BannerAnimate absolute top-0 left-0"
      />
      <img
        src={img2.src}
        alt="banner"
        className="w-[100%] h-[90%] md:w-[90%] xl:w-[90%] 2xl:w-[80%] BannerAnimate absolute top-[38%] left-0"
      />
      <img
        src={img3.src}
        alt="banner"
        className="w-[100%] h-[90%] md:w-[90%] xl:w-[90%] 2xl:w-[80%] BannerAnimate absolute top-[38%] left-0"
      />
      <img
        src={img4.src}
        alt="banner"
        className="w-[100%] h-[90%] md:w-[90%] xl:w-[90%] 2xl:w-[80%] BannerAnimate absolute top-[38%] left-0"
      />
    </>
  );
}

export default Banner;
