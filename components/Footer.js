import React from 'react';
import { FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

const Footer = ({ color }) => {
  return (
    <div className="w-[99dvw] h-full  bottom-1 left-0 ml-2 pt-2 flex flex-col gap-5 xl:flex-row-reverse xl:gap-y-8 text-sm xl:text-2xl justify-between items-center px-10">
      <div
        style={{ color: `${color}` }}
        className="text-right font-IranianSans">
        آدرس : پایین تر از سه راهی مطهری بالایی ، جنب کفش ملی
      </div>
      <div className="flex gap-4 justify-center md:justify-start">
        <div
          onClick={() =>
            window.open(
              'https://instagram.com/ground_zero_khoramabad',
              '_blank'
            )
          }
          className={`w-10 h-10 rounded-full flex items-center justify-center text-black cursor-pointer SocialMediaOpacity`}
          style={{ backgroundColor: `${color}` }}>
          <FaInstagram size={25} />
        </div>
        <div
          onClick={() =>
            window.open(
              'https://api.whatsapp.com/send?phone=989359378271',
              '_blank'
            )
          }
          className={`w-10 h-10 rounded-full flex items-center justify-center text-black cursor-pointer SocialMediaOpacity`}
          style={{ backgroundColor: `${color}` }}>
          <FaWhatsapp size={25} />
        </div>
        <div
          onClick={() => window.open('https://google.location.com', '_blank')}
          className={`w-10 h-10 rounded-full flex items-center justify-center text-black cursor-pointer SocialMediaOpacity`}
          style={{ backgroundColor: `${color}` }}>
          <IoLocationSharp size={25} />
        </div>
        <div
          className={`w-fit h-10 rounded-xl flex gap-2 px-2 items-center justify-center text-black cursor-pointer SocialMediaOpacity`}
          style={{ backgroundColor: `${color}`, Color: `${color}` }}>
          <FaPhone size={20} />
          09359378271
        </div>
      </div>
    </div>
  );
};

export default Footer;
