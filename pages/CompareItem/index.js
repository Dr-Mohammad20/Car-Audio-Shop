import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SelectedCompareItems } from '@/src/features/compareItemSlice';
import { removeItem } from '@/src/features/compareItemSlice';
import { TbArrowBigLeftLineFilled } from 'react-icons/tb';
import sanitizeHtml from 'sanitize-html';
import Link from 'next/link';

function createDescription(des) {
  return { __html: des };
}

const index = () => {
  const dispatch = useDispatch();
  const compareItems = useSelector(SelectedCompareItems);
  console.log('Items Is : ', compareItems);
  return (
    <div className="w-[100dvw] min-h-[100dvh] h-fit flex justify-evenly items-start flex-wrap backGround">
      <div className="w-full flex justify-between items-center mb-2 bg-black/[0.7] BorderDownMotefareghe h-[11dvh]">
        <Link
          className="text-white font-IranianSans text-sm md:text-2xl w-[20%] md:w-[25%] flex justify-center"
          href="/Products">
          برگشت
        </Link>
        <Link
          className="text-white font-IranianSans text-lg md:text-5xl w-[50%] flex justify-center"
          href="/">
          فروشگاه فربد
        </Link>
        <p className="text-white font-IranianSans text-sm md:text-2xl w-[30%] md:w-[25%] flex justify-center">
          مقایسه محصولات
        </p>
      </div>
      {compareItems.map((Items) => (
        <div className="w-full h-[17.5dvh] flex flex-row-reverse md:flex-col md:w-[19dvw] md:min-h-[88dvh] gap-5 justify-start items-center border border-white bg-black/[0.5] rounded-xl p-6">
          <div className="h-full w-full md:h-[22dvh]">
            <img
              src={Items.images[0].url}
              className="hover:scale-110 cursor-pointer w-full h-full"
              onClick={(e) => setImage(e.target.src)}
              alt="ii"
            />
          </div>
          <div className="h-full w-full md:h-[50dvh] flex flex-col md:flex-col">
            <div className="text-white font-IranianSans text-right">
              {Items.model}
              {' - '}
              {Items.type}
            </div>
            <div>
              <p className="text-white font-IranianSans text-right">
                برند : {Items.brand}
              </p>
            </div>
            <div className="invisible flex-row md:visible">
              <div className="text-[34px] font-semibold mb-5 mt-10 text-white font-IranianSans">
                مشخصات محصول
              </div>
              <div
                className="text-md mb-5 leading-normal text-white font-IranianSans text-right"
                dangerouslySetInnerHTML={createDescription(
                  sanitizeHtml(Items.description.html)
                )}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default index;
