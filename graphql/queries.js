import { gql } from 'graphql-request';

const GET_All_PRODUCTS = gql`
  query {
    products {
      brand
      category
      id
      model
      moujoudi
      slug
      type
      description {
        html
      }
      images {
        url
      }
    }
  }
`;
const GET_PRODCUTS_BY_CATEGORY = gql`
  query GetProductsByCategory($category: String) {
    products(where: { category: $category }) {
      brand
      category
      id
      model
      moujoudi
      slug
      type
      description {
        html
      }
      images {
        url
      }
    }
  }
`;

const GET_PRODUCTS_BY_TYPE = gql`
  query GetProductsByType($type: String) {
    products(where: { type: $type }) {
      brand
      category
      id
      model
      moujoudi
      slug
      type
      description {
        html
      }
      images {
        url
      }
    }
  }
`;

const GET_ONE_PRODUCT = gql`
  query GetOneProduct($slug: String) {
    product(where: { slug: $slug }) {
      brand
      category
      id
      model
      moujoudi
      slug
      type
      description {
        html
      }
      images {
        url
      }
    }
  }
`;

export {
  GET_All_PRODUCTS,
  GET_PRODCUTS_BY_CATEGORY,
  GET_PRODUCTS_BY_TYPE,
  GET_ONE_PRODUCT,
};
