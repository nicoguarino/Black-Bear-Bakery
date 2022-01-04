import { gql } from '@apollo/client';

// gets products based on category id and populates products associated with that category
export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

// gets all products and displays info
export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;

// gets all categories and displays names
export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

// pulls user data to display previous purchases and current cart
export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;

// checks for products in checkout by product id in user session
export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;