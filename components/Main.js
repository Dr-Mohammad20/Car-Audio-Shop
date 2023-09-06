import Image from 'next/image';
import React from 'react';

function Main({ image }) {
  return (
    <div className="w-[100%] h-[70%] flex justify-center items-center bg-slate-300">
      <Image src={image} className="PageImageMaxWidth" />
    </div>
  );
}

export default Main;
