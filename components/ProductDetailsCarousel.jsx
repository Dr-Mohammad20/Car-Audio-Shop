import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProductDetailsCarousel = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px] h-[70dvh] bg-slate-500">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel">
        <img src="/GZCF1.png" />
        <img src="/GZCF2.png" />
        <img src="/GZCF3.png" />
        <img src="/GZCF4.png" />
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
