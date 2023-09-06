import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Components
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';

// graphQl
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
  const data = await graphQLClient.request(query, { category: 'متفرقه' });
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

  const subUnchek = useRef();
  const midRangeUnchek = useRef();
  const fullRangeUnchek = useRef();
  const AmpUnchek = useRef();
  const tiyouterUnchek = useRef();
  const simBarghUnchek = useRef();
  const ARCUnchek = useRef();
  const boxUnchek = useRef();
  const etesalatUnchek = useRef();

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
    subUnchek.current.checked = false;
    midRangeUnchek.current.checked = false;
    fullRangeUnchek.current.checked = false;
    AmpUnchek.current.checked = false;
    tiyouterUnchek.current.checked = false;
    simBarghUnchek.current.checked = false;
    ARCUnchek.current.checked = false;
    boxUnchek.current.checked = false;
    etesalatUnchek.current.checked = false;
    setData(productsData);
    setSelectedCategory('');
  };
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
    // Main Div Start
    <div className="w-[100dvw] min-h-[100dvh] h-fit flex flex-col justify-center items-center px-2 bg-black">
      {/* <div className="w-[100%] h-[20dvh] flex justify-center items-center bg-white">
        <Image src={HeaderImage} className="PageImageMaxWidth" />
        <div className="hover:bg-Motefareghe hover:text-white text-Motefareghe hover:rounded-lg font-IranianSans">
          <Header color={'rgb(255,255,255)'} />
        </div>
        <div className="h-[6%] w-[99dvw] flex flex-row-reverse justify-evenly items-center gap-4 absolute top-[13%] left-0 ml-2 text-sm xl:text-xl">
          <button className="Btn hover:bg-Motefareghe hover:text-white text-Motefareghe hover:rounded-lg font-IranianSans">
            همه محصولات
          </button>
          <button className="Btn hover:bg-Motefareghe hover:text-white text-Motefareghe hover:rounded-lg font-IranianSans">
            آمپلی فایر
          </button>
          <button className="Btn hover:bg-Motefareghe hover:text-white text-Motefareghe hover:rounded-lg font-IranianSans">
            میدرنج
          </button>
          <button className="Btn hover:bg-Motefareghe hover:text-white text-Motefareghe hover:rounded-lg font-IranianSans">
            فول رنج
          </button>
          <button className="Btn hover:bg-Motefareghe hover:text-white text-Motefareghe hover:rounded-lg font-IranianSans">
            آرسی
          </button>
        </div>
      </div> */}

      {/* Header Section start*/}
      <div className="h-[13dvh] w-full flex flex-row-reverse justify-center items-center gap-4 bg-black/[0.7] BorderDownMotefareghe">
        <Link
          href="/Products"
          className="h-full w-1/4 flex justify-center items-center text-Motefareghe font-IranianSans text-sm xl:text-3xl">
          محصولات
        </Link>
        <Link
          href="/"
          className="h-full w-1/2 flex justify-center items-center text-Motefareghe font-IranianSans text-2xl xl:text-6xl">
          فروشگاه فربد
        </Link>
        <Link
          href="/CompareItem"
          className="h-full w-1/4 flex justify-center items-center text-Motefareghe font-IranianSans text-sm xl:text-3xl">
          مقایسه محصولات
        </Link>
      </div>
      {/* Header Section end*/}

      {/* Category section start */}
      <div className="w-full min-h-[7dvh] h-fit flex flex-row-reverse flex-wrap justify-evenly items-center gap-4 text-sm xl:text-xl text-Motefareghe bg-black/[0.7] BorderDownMotefareghe">
        <div className="flex font-IranianSans">
          <button onClick={clickHandler}>همه محصولات</button>
        </div>
        <div className="flex font-IranianSans">
          <label className=" mr-2" htmlFor="flexCheckDefault">
            ساب ووفر
          </label>
          <input
            ref={subUnchek}
            className="accent-Motefareghe"
            type="checkbox"
            name="selectedCategory"
            value="ساب ووفر"
            id="flexCheckDefault"
            onChange={handleChange}
          />
        </div>
        <div className="flex font-IranianSans">
          <label className=" mr-2" htmlFor="flexCheckDefault">
            میدرنج
          </label>
          <input
            ref={midRangeUnchek}
            className="accent-Motefareghe"
            type="checkbox"
            name="selectedCategory"
            value="میدرنج"
            id="flexCheckDefault"
            onChange={handleChange}
          />
        </div>
        <div className="flex font-IranianSans">
          <label className=" mr-2" htmlFor="flexCheckDefault">
            فول رنج
          </label>
          <input
            ref={fullRangeUnchek}
            className="accent-Motefareghe"
            type="checkbox"
            name="selectedCategory"
            value="فول رنج"
            id="flexCheckDefault"
            onChange={handleChange}
          />
        </div>
        <div className="flex font-IranianSans">
          <label className=" mr-2" htmlFor="flexCheckDefault">
            آمپلی فایر
          </label>
          <input
            ref={AmpUnchek}
            className="accent-Motefareghe"
            type="checkbox"
            name="selectedCategory"
            value="آمپلی فایر"
            id="flexCheckDefault"
            onChange={handleChange}
          />
        </div>
        <div className="flex font-IranianSans">
          <label className=" mr-2" htmlFor="flexCheckDefault">
            تیوتر
          </label>
          <input
            ref={tiyouterUnchek}
            className="accent-Motefareghe"
            type="checkbox"
            name="selectedCategory"
            value="تیوتر"
            id="flexCheckDefault"
            onChange={handleChange}
          />
        </div>
        <div className="flex font-IranianSans">
          <label className=" mr-2" htmlFor="flexCheckDefault">
            سیم برق
          </label>
          <input
            ref={simBarghUnchek}
            className="accent-Motefareghe"
            type="checkbox"
            name="selectedCategory"
            value="سیم برق"
            id="flexCheckDefault"
            onChange={handleChange}
          />
        </div>
        <div className="flex font-IranianSans">
          <label className=" mr-2" htmlFor="flexCheckDefault">
            آر سی ای
          </label>
          <input
            ref={ARCUnchek}
            className="accent-Motefareghe"
            type="checkbox"
            name="selectedCategory"
            value="آر سی ای"
            id="flexCheckDefault"
            onChange={handleChange}
          />
        </div>
        <div className="flex font-IranianSans">
          <label className=" mr-2" htmlFor="flexCheckDefault">
            باکس
          </label>
          <input
            ref={boxUnchek}
            className="accent-Motefareghe"
            type="checkbox"
            name="selectedCategory"
            value="باکس"
            id="flexCheckDefault"
            onChange={handleChange}
          />
        </div>
        <div className="flex font-IranianSans">
          <label className=" mr-2" htmlFor="flexCheckDefault">
            اتصالات
          </label>
          <input
            ref={etesalatUnchek}
            className="accent-Motefareghe"
            type="checkbox"
            name="selectedCategory"
            value="اتصالات"
            id="flexCheckDefault"
            onChange={handleChange}
          />
        </div>
      </div>
      {/* Category section end */}

      {/* Main section start */}
      <div className="box-border w-full h-fit min-h-[70dvh] flex flex-wrap py-5 px-5 gap-5 justify-center bg-white BackMotefareghe">
        {data.length > 0
          ? data.map((product) => (
              <ProductCard
                color={'Motefareghe'}
                data={product}
                url={`/Products/Motefareghe/${product.slug}`}
              />
            ))
          : productsData.map((product) => (
              <ProductCard
                color={'Motefareghe'}
                data={product}
                url={`/Products/Motefareghe/${product.slug}`}
              />
            ))}
      </div>
      {/* Main section end */}

      {/* Footer section start */}
      <div className="relative w-[100%] min-h-[10dvh] h-fit py-5 flex justify-center items-center FooterMotefareghe">
        <Footer color={'rgb(255,255,255)'} />
      </div>
      {/* Footer section end */}
    </div>
    // Main Div End
  );
}

export default index;
