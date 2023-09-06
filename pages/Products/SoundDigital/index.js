import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

// Component
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';

// GraphQl
import { GraphQLClient } from 'graphql-request';
import { GET_PRODCUTS_BY_CATEGORY } from '@/graphql/queries';
export const getStaticProps = async () => {
  const url = process.env.SECRET_BASE_URL_GRAPHQL;
  const token = process.env.SECRET_GRAPHQL_CMS_TOKEN;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: token,
    },
  });
  const query = GET_PRODCUTS_BY_CATEGORY;
  const data = await graphQLClient.request(query, { category: 'ساند دیجیتال' });
  const productsData = data.products;
  return {
    props: {
      productsData,
    },
  };
};

function index({ productsData }) {
  return (
    <>
      <Head>
        <title>محصولات ساند دیجیتال در فروشگاه فربد</title>
      </Head>
      {/* Main Div Start */}
      <div className="w-[100dvw] min-h-[100dvh] h-fit flex flex-col justify-center items-center px-2 bg-black">
        {/* Header Section start*/}
        <div className="h-[13dvh] w-full flex flex-row-reverse justify-center items-center gap-4 bg-black/[0.7] BorderDownSoundDigital">
          <Link
            href="/Products"
            className="h-full w-1/4 flex justify-center items-center text-SoundDigital font-IranianSans text-sm xl:text-3xl">
            محصولات
          </Link>
          <Link
            href="/"
            className="h-full w-1/2 flex justify-center items-center text-SoundDigital font-IranianSans text-2xl xl:text-6xl">
            فروشگاه فربد
          </Link>
          <Link
            href="/CompareItem"
            className="h-full w-1/4 flex justify-center items-center text-SoundDigital font-IranianSans text-sm xl:text-3xl">
            مقایسه محصولات
          </Link>
        </div>
        {/* Header Section end*/}

        {/* Main section start */}
        <div className="box-border w-full h-fit min-h-[71dvh] flex flex-wrap py-5 px-5 gap-5 justify-center bg-white BackSoundDigital">
          {productsData ? (
            productsData.map((product) => (
              <ProductCard
                color={'SoundDigital'}
                data={product}
                url={`/Products/SoundDigital/${product.slug}`}
              />
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
        {/* Main section end */}

        {/* Footer section start */}
        <div className="relative w-[100%] min-h-[10dvh] h-fit py-5 flex justify-center items-center FooterSoundDigital">
          <Footer color={'rgb(237,28,36)'} />
        </div>
        {/* Footer section end */}
      </div>
      {/* Main Div End */}
    </>
  );
}

export default index;
