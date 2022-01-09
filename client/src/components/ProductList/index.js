import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { idbPromise } from '../../utils/helpers';

import ProductItem from '../ProductItem';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import './style.css';

function ProductList() {
    const [state, dispatch] = useStoreContext();
    const { currentCategory } = state;
    const { loading, data } = useQuery(QUERY_PRODUCTS);
    
    useEffect(() => {
      if (data) {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: data.products
        });
  
        data.products.forEach((product) => {
          idbPromise('products', 'put', product);
        });
      } else if (!loading) {
        idbPromise('products', 'get').then((products) => {
          dispatch({
            type: UPDATE_PRODUCTS,
            products: products
          });
        });
      }
    }, [data, loading, dispatch]);
    
    function filterProducts() {
      if (!currentCategory) {
        return state.products;
      }
    
      return state.products.filter(product => product.category._id === currentCategory);
    }
  
    return (
      <div className="my-2">
        <h2>Our Products:</h2>
        <p className="price-per-dozen">Price is per dozen</p>
        {state.products.length ? (
          <div className="flex-row">
            {filterProducts().map((product) => (
              <ProductItem
                key={product._id}
                _id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
              />
            ))}
          </div>
        ) : (
          <h3>You haven't added any products yet!</h3>
        )}
        <div>
            <div class="divider div-transparent"></div>
        </div>
      </div>
      
    );
  }

  export default ProductList;