import Link from 'next/link';
import React from 'react';

const Header = ({ color }) => {
  return (
    <div className="h-[11%] w-[99dvw] flex flex-row-reverse justify-center items-center gap-4 absolute top-2 left-0 ml-2 text-lg xl:text-3xl ">
      <div className="h-full w-1/4 flex justify-center items-center">
        <Link href="/Products" className="font-IranianSans">
          <div style={{ color: `${color}` }}>محصولات</div>
        </Link>
      </div>
      <Link href="/" className="h-full w-1/2"></Link>
      <div className="h-full w-1/4 flex justify-center items-center">
        <Link href="/AboutUs" className="font-IranianSans">
          <div style={{ color: `${color}` }}>درباره ما</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
