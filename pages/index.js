import Link from 'next/link';
import { FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

//Images
import img1 from '../public/GroundZero-Banner.png';
import img2 from '../public/HammerTech-Banner.png';
import img3 from '../public/SoundDigital-Banner.png';
import img4 from '../public/Pioneer-Banner.png';

export default function Home() {
  return (
    <div className="w-[100dvw] h-[100dvh] flex flex-wrap flex-col justify-center items-center bg-black BackGroundZero bg-no-repeat">
      {/* Header Section */}
      <div className="h-[15%] w-full flex flex-row-reverse justify-center items-center gap-4 top-2 left-0 text-xl xl:text-3xl bg-black/[0.7]">
        <Link
          href="/Products"
          className="h-full w-1/4 flex justify-center items-center text-GroundZero font-IranianSans BorderDownGroundZero text-sm xl:text-3xl">
          محصولات
        </Link>
        <Link
          href="/"
          className="h-full w-1/2 flex justify-center items-center text-GroundZero font-IranianSans text-2xl xl:text-6xl">
          فروشگاه فربد
        </Link>
        <Link
          href="/AboutUs"
          className="h-full w-1/4 flex justify-center items-center text-GroundZero font-IranianSans BorderDownGroundZero text-sm xl:text-3xl">
          درباره ما
        </Link>
      </div>

      {/* Main Section */}
      <div className="w-full h-[70%] md:h-[75%] flex flex-wrap justify-center items-start text-sm xl:text-3xl sm:text-sm">
        <div className="w-1/2 h-[20%] md:h=[25%] flex flex-col flex-wrap gap-4 md:gap-12 justify-center items-center text-center text-GroundZero bg-black/[0.7] BorderDownGroundZero clipPath">
          <h3>نمایندگی رسمی محصولات</h3>
          <h1>گرند زیرو ، همرتک ، ساند دیجیتال ، پایونیر</h1>
        </div>
        <div className="w-[90%] h-[75%] relative">
          <img
            src={img1.src}
            alt="banner"
            className="w-[80%] ml-[10%] h-[90%] absolute top-0 left-0 BannerAnimate"
          />
          <img
            src={img2.src}
            alt="banner"
            className="w-[80%] ml-[10%] h-[90%]  absolute top-0 left-0 BannerAnimate"
          />
          <img
            src={img3.src}
            alt="banner"
            className="w-[80%] ml-[10%] h-[90%]  absolute top-0 left-0 BannerAnimate"
          />
          <img
            src={img4.src}
            alt="banner"
            className="w-[80%] ml-[10%] h-[90%]  absolute top-0 left-0 BannerAnimate"
          />
          {/* <Banner /> */}
        </div>
      </div>

      {/* Footer Section */}
      <div className="BorderTopGroundZero w-full h-[15%] md:h-[10%] text-GroundZero flex flex-col xl:flex-row-reverse xl:gap-y-8 text-sm xl:text-2xl text-right bg-black/[0.7] justify-between items-center px-10">
        <div className="font-IranianSans mt-2 md:mt-0">
          آدرس : پایین تر از سه راهی مطهری بالایی ، جنب کفش ملی
        </div>
        <div className="flex gap-4 justify-center md:justify-start mb-2 md:mb-0">
          <div
            onClick={() =>
              window.open(
                'https://instagram.com/ground_zero_khoramabad',
                '_blank'
              )
            }
            className={`w-10 h-10 rounded-full flex items-center justify-center text-black cursor-pointer SocialMediaOpacity text-GroundZero bg-GroundZero`}>
            <FaInstagram size={25} />
          </div>
          <div
            onClick={() =>
              window.open(
                'https://api.whatsapp.com/send?phone=989359378271',
                '_blank'
              )
            }
            className={`w-10 h-10 rounded-full flex items-center justify-center text-black cursor-pointer SocialMediaOpacity text-GroundZero bg-GroundZero`}>
            <FaWhatsapp size={25} />
          </div>
          <div
            onClick={() => window.open('https://google.location.com', '_blank')}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-black cursor-pointer SocialMediaOpacity text-GroundZero bg-GroundZero`}>
            <IoLocationSharp size={25} />
          </div>
          <div
            className={`w-fit h-10 rounded-xl flex gap-2 px-2 items-center justify-center text-black cursor-pointer SocialMediaOpacity text-GroundZero bg-GroundZero`}>
            <FaPhone size={20} />
            09359378271
          </div>
        </div>
      </div>
      {/* Footer section end */}
    </div>
    // Main Div End
  );
}
