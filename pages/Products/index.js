import React from 'react';
import HeaderImage from '../../assets/images/Up-Page-GroundZero.jpg';

import Image from 'next/image';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';
import { GET_All_PRODUCTS } from '@/graphql/queries';

import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '@/src/features/compareItemSlice';
import { SelectedCompareItems } from '@/src/features/compareItemSlice';
import Head from 'next/head';

export const getStaticProps = async () => {
  const url = process.env.SECRET_BASE_URL_GRAPHQL;
  const token = process.env.SECRET_GRAPHQL_CMS_TOKEN;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: token,
    },
  });
  const query = GET_All_PRODUCTS;
  const data = await graphQLClient.request(query);
  const productsData = data.products;
  return {
    props: {
      productsData,
    },
  };
};

function index({ productsData }) {
  const dispatch = useDispatch();
  const compareItems = useSelector(SelectedCompareItems);
  console.log('compare List Items in Products is : ', compareItems);

  return (
    <>
      <Head>
        <title>محصولات گرند زیرو در فروشگاه فربد</title>
      </Head>
      {/* Main Div Start */}
      <div className="w-[100dvw] min-h-[100dvh] h-fit flex flex-col justify-center items-center px-2 bg-black">
        {/* Header Section start*/}
        <div className="h-[13dvh] w-full flex flex-row-reverse justify-center items-center gap-4 bg-black/[0.7] BorderDownGroundZero">
          <Link
            href="/Products"
            className="h-full w-1/4 flex justify-center items-center text-GroundZero font-IranianSans text-sm xl:text-3xl">
            محصولات
          </Link>
          <Link
            href="/"
            className="h-full w-1/2 flex justify-center items-center text-GroundZero font-IranianSans text-2xl xl:text-6xl">
            فروشگاه فربد
          </Link>
          <Link
            href="/CompareItem"
            className="h-full w-1/4 flex justify-center items-center text-GroundZero font-IranianSans text-sm xl:text-3xl">
            مقایسه محصولات
          </Link>
        </div>
        {/* Header Section end*/}

        {/* Category section start */}
        <div className="w-full min-h-[7dvh] h-fit flex flex-row-reverse justify-evenly items-center text-sm xl:text-xl text-GroundZero bg-black/[0.7] BorderDownGroundZero">
          <Link
            href="/Products/GroundZero"
            className="Btn hover:bg-GroundZero hover:text-black text-GroundZero hover:rounded-lg text-center flex justify-center items-center font-IranianSans">
            گرند زیرو
          </Link>
          <Link
            href="/Products/HammerTech"
            className="Btn hover:bg-GroundZero hover:text-black text-GroundZero hover:rounded-lg text-center flex justify-center items-center font-IranianSans">
            همرتک
          </Link>
          <Link
            href="/Products/Pioneer"
            className="Btn hover:bg-GroundZero hover:text-black text-GroundZero hover:rounded-lg text-center flex justify-center items-center font-IranianSans">
            پایونر
          </Link>
          <Link
            href="/Products/SoundDigital"
            className="Btn hover:bg-GroundZero hover:text-black text-GroundZero hover:rounded-lg text-center flex justify-center items-center font-IranianSans">
            ساند دیجیتال
          </Link>
          <Link
            href="/Products/Motefareghe"
            className="Btn hover:bg-GroundZero hover:text-black text-GroundZero hover:rounded-lg text-center flex justify-center items-center font-IranianSans">
            بقیه برندها
          </Link>
        </div>
        {/* Category section end */}

        {/* Main section start */}
        <div className="box-border w-full h-fit min-h-[70dvh] flex flex-wrap py-5 px-5 gap-5 justify-center backGround">
          {productsData ? (
            productsData.map((product) => (
              <ProductCard
                key={product.id}
                color={'GroundZero'}
                data={product}
                url={`/Products/${product.slug}`}
              />
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
        {/* Main section end */}

        {/* Footer section start */}
        <div className="relative w-[100%] min-h-[10dvh] h-fit py-5 flex justify-center items-center FooterGroundZero">
          <Footer color={'rgb(251, 246, 2)'} />
        </div>
        {/* Footer section end */}
      </div>
      {/* Main Div End */}
    </>
  );
}

export default index;
