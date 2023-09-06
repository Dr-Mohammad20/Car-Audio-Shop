import Link from 'next/link';
import React from 'react';

import { isInCart } from '@/src/features/helper';

import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '@/src/features/compareItemSlice';
import { SelectedCompareItems } from '@/src/features/compareItemSlice';

const ProductCard = ({ color, data, url }) => {
  const dispatch = useDispatch();
  const compareItems = useSelector(SelectedCompareItems);

  return (
    <div
      className={`box-border w-[95%] md:w-[45%] lg:w-[23%] xl-w[23%] 2xl:w-[18%] h-[30dvh] BackMorphism py-5 flex flex-col justify-evenly items-center`}>
      {url && (
        <Link
          href={url}
          className="shadow-3xl h-full transform duration-300 hover:scale-110 overflow-hidden cursor-pointer flex flex-col justify-evenly items-center text-center">
          {/* use (shadow-3xl) a theme for box shadow (theme create in tailwind.config.js) */}
          <img
            className="w-3/5 h-[65%]"
            src={data.images[0].url}
            alt="Product Image"
          />
          <div
            className="p-4 text-black/[0.9] h-[35%] w-full"
            style={{ direction: 'rtl' }}>
            <h2 className={`text-lg font-medium text-${color}`}>
              {data.type} {data.model}
            </h2>
          </div>
        </Link>
      )}

      {!url && (
        <Link
          href="/Products/1"
          className="shadow-3xl h-full transform duration-300 hover:scale-110 overflow-hidden cursor-pointer flex flex-col justify-evenly items-center text-center">
          {/* use (shadow-3xl) a theme for box shadow (theme create in tailwind.config.js) */}
          <img className="w-3/5 h-[65%]" src="/GZCF1.png" alt="Product Image" />
          <div className="p-4 text-black/[0.9] h-[35%] w-full">
            <h2 className={`text-lg font-medium text-${color}`}>
              Product Name
            </h2>
            <div
              className={`flex items-center justify-center text-${color} text-center`}>
              <p className="mr-2 text-lg font-mono text-center">$20.00</p>
            </div>
          </div>
        </Link>
      )}
      {!isInCart(compareItems, data.id) ? (
        <button
          className={`text-${color}`}
          onClick={() => dispatch(addItem(data))}>
          Add To Compare List
        </button>
      ) : (
        <button
          className={`text-${color}`}
          onClick={() => dispatch(removeItem(data))}>
          Remove From Compare List
        </button>
      )}
    </div>
  );
};

export default ProductCard;
