import React from 'react';
import HeaderImage from '../../../assets/images/Up-Slug-HammerTech.jpg';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCarousel from '@/components/ProductCarousel';
import Link from 'next/link';
import sanitizeHtml from 'sanitize-html';

import { TbArrowBigLeftLineFilled } from 'react-icons/tb';

import { GraphQLClient, gql } from 'graphql-request';

export const getServerSideProps = async (context) => {
  const url = process.env.SECRET_BASE_URL_GRAPHQL;
  const token = process.env.SECRET_GRAPHQL_CMS_TOKEN;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: token,
    },
  });
  const pageSlug = context.params.slug;

  const query = gql`
    query ($pageSlug: String!) {
      product(where: { slug: $pageSlug }) {
        brand
        category
        id
        model
        moujoudi
        description {
          html
        }
        slug
        type
        images {
          url
        }
      }
    }
  `;
  const variables = { pageSlug };
  const data = await graphQLClient.request(query, variables);
  const productData = data.product;
  return {
    props: {
      productData,
    },
  };
};

function createDescription(des) {
  return { __html: des };
}

const ProductDetails = ({ productData }) => {
  console.log(productData);
  return (
    <div className="w-ful flex-col">
      <div className="w-[100%] top-0 h-[15dvh] flex justify-center items-center">
        <Image src={HeaderImage} className="PageImageMaxWidth" />
        <div className="hover:bg-GroundZero hover:text-white text-GroundZero hover:rounded-lg font-IranianSans">
          <Header color={'rgb(17,103,229)'} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row md:px-10 gap-[10px] lg:gap-[100px] min-h-[75dvh] py-10 px-10 backGround">
        <div className="flex-[1] BackMorphismWhite">
          <ProductCarousel data={productData} />
        </div>
        <div className="flex-[1] py-5 DirectionRTL BackMorphism px-10 TextColorHammerTech">
          {/* Product Title */}
          <div className="flex justify-between items-center mb-2">
            <div className="text-[34px] font-semibold">
              {productData.type} {productData.brand}
            </div>
            <Link href="/Products/HammerTech">
              <TbArrowBigLeftLineFilled size={30} />
            </Link>
          </div>
          {/* Product Model */}
          <div className="text-lg font-semibold mt-5">
            مدل : {productData.model}
          </div>
          {/* Product Moujoudi */}
          <div className="text-lg font-semibold mt-5 flex gap-2">
            موجودی :{' '}
            {productData.moujoudi ? (
              <p className="text-green-600 font-bold text-xl">موجود است</p>
            ) : (
              <p className="text-red-600 font-bold text-xl">موجود نیست</p>
            )}
          </div>
          <div>
            <div className="text-[34px] font-semibold mb-5 mt-10">
              مشخصات محصول
            </div>
            <div
              className="text-md mb-5 leading-normal"
              dangerouslySetInnerHTML={createDescription(
                sanitizeHtml(productData.description.html)
              )}></div>
          </div>
        </div>
      </div>

      <div className="relative w-[100%] min-h-[10dvh] h-fit py-5 flex justify-center items-center FooterHammerTech">
        <Footer color={'rgb(17,103,229)'} />
      </div>
    </div>
  );
};

export default ProductDetails;
