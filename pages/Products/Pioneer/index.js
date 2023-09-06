import React, { useState, useEffect, useRef } from 'react';
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
  const data = await graphQLClient.request(query, { category: 'پایونیر' });
  const productsData = data.products;
  return {
    props: {
      productsData,
    },
  };
};

function index({ productsData }) {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [data, setData] = useState([]);
  const selectedData = [];
  // Ref Section
  const speackerUnchek = useRef();
  const playerUnchek = useRef();
  // Handler Section Start
  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    console.log(`${value} is ${checked}`);
    // Case 1 : The user checks the box
    if (checked) {
      setSelectedCategory([...selectedCategory, value]);
    }
    // Case 2  : The user unchecks the box
    else {
      setSelectedCategory(selectedCategory.filter((e) => e !== value));
    }
    console.log(selectedCategory);
  };

  const clickHandler = () => {
    speackerUnchek.current.checked = false;
    playerUnchek.current.checked = false;
    setData(productsData);
    setSelectedCategory('');
  };
  // Handler Section End

  console.log('Product data is : ', productsData);
  console.log('Selected Category is : ', selectedCategory);
  console.log('Selected Data is : ', selectedData);

  useEffect(() => {
    setData(productsData);
    if (selectedCategory) {
      selectedCategory.map((item) => {
        for (var i = 0; i < productsData.length; i++) {
          if (productsData[i].type === item) {
            selectedData.push(productsData[i]);
          }
        }
      });
      setData(selectedData);
    }
  }, [selectedCategory]);
  return (
    <>
      <Head>
        <title>محصولات پایونیر در فروشگاه فربد</title>
      </Head>
      {/* Main Div Start */}
      <div className="w-[100dvw] min-h-[100dvh] h-fit flex flex-col justify-center items-center px-2 bg-black">
        {/* Header Section start*/}
        <div className="h-[13dvh] w-full flex flex-row-reverse justify-center items-center gap-4 bg-black/[0.7] BorderDownPioneer">
          <Link
            href="/Products"
            className="h-full w-1/4 flex justify-center items-center text-Pioneer font-IranianSans text-sm xl:text-3xl">
            محصولات
          </Link>
          <Link
            href="/"
            className="h-full w-1/2 flex justify-center items-center text-Pioneer font-IranianSans text-2xl xl:text-6xl">
            فروشگاه فربد
          </Link>
          <Link
            href="/CompareItem"
            className="h-full w-1/4 flex justify-center items-center text-Pioneer font-IranianSans text-sm xl:text-3xl">
            مقایسه محصولات
          </Link>
        </div>
        {/* Header Section end*/}

        {/* Category section start */}
        <div className="w-full min-h-[7dvh] h-fit flex flex-row-reverse flex-wrap justify-evenly items-center gap-4 text-sm xl:text-xl text-Pioneer bg-black/[0.7] BorderDownPioneer">
          <div className="flex font-IranianSans">
            <button onClick={clickHandler}>همه محصولات</button>
          </div>
          <div className="flex font-IranianSans">
            <label className=" mr-2" htmlFor="flexCheckDefault">
              اسپیکر
            </label>
            <input
              ref={speackerUnchek}
              className="accent-Pioneer"
              type="checkbox"
              name="selectedCategory"
              value="اسپیکر"
              id="flexCheckDefault"
              onChange={handleChange}
            />
          </div>
          <div className="flex font-IranianSans">
            <label className=" mr-2" htmlFor="flexCheckDefault">
              پخش
            </label>
            <input
              ref={playerUnchek}
              className="accent-Pioneer"
              type="checkbox"
              name="selectedCategory"
              value="پخش"
              id="flexCheckDefault"
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Category section end */}

        {/* Main section start */}
        <div className="box-border w-full h-fit min-h-[70dvh] flex flex-wrap py-5 px-5 gap-5 justify-center bg-white BackPioneer">
          {data.length > 0
            ? data.map((product) => (
                <ProductCard
                  color={'Pioneer'}
                  data={product}
                  url={`/Products/Pioneer/${product.slug}`}
                />
              ))
            : productsData.map((product) => (
                <ProductCard
                  color={'Pioneer'}
                  data={product}
                  url={`/Products/Pioneer/${product.slug}`}
                />
              ))}
        </div>
        {/* Main section end */}

        {/* Footer section start */}
        <div className="relative w-[100%] min-h-[10dvh] h-fit py-5 flex justify-center items-center FooterPioneer">
          <Footer color={'rgb(169,2,48)'} />
        </div>
        {/* Footer section end */}
      </div>
      {/* Main Div End */}
    </>
  );
}

export default index;
