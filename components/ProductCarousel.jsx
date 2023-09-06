import React, { useState } from 'react';

const ProductCarousel = ({ data }) => {
  const [image, setImage] = useState(data.images[0].url);
  return (
    <div className="flex h-full justify-evenly items-center gap-5">
      <div className="h-full w-[15%] flex flex-col justify-evenly items-center text-white">
        {data.images.map((item, i) => (
          <img
            src={item.url}
            className="hover:scale-110 cursor-pointer"
            onClick={(e) => setImage(e.target.src)}
            alt="ii"
          />
        ))}
      </div>
      <div className="w-[75%] h-full flex justify-center items-center">
        <img
          style={{
            width: '100%',
            height: '100%',
          }}
          src={image}
          alt="Product Image"
        />
      </div>
    </div>
  );
};

export default ProductCarousel;

// const randomData = (data) => {
//   setRandomData(data[Math.floor(Math.random() * data.length)]);
// };
// 3 khat kode bala yeki az majmoe dadehai ke be an midahim ra
// be sourat random entekhab va daroun state RandomData mirizad
