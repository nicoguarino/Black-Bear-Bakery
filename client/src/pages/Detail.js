import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { idbPromise } from '../utils/helpers';
import { QUERY_PRODUCTS } from '../utils/queries';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS 
} from '../utils/actions';
import { Container } from 'react-bootstrap';

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState({})
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const { products, cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
  
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 }
      });
      // if product isn't in the cart yet, add it to the shopping cart in IndexedDB
      idbPromise('cart', 'put', {...currentProduct, purchaseQuantity: 1});
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id
    });
    // upon removal from cart, delete the item from IndexedDB using the 'currentProduct._id' to locate what to remove
    idbPromise('cart', 'delete', { ...currentProduct });
  }
  
  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find(product => product._id === id));
    } 
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products
      });
  
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  return (
    <>
      {currentProduct ? (
        <Container className="border">
          <Link className="back" to="/store">← Back to Products</Link>

          <h2>{currentProduct.name}</h2>
          
         
          <img
            className="product-img"
            src={`/images/${currentProduct.image}`}
            alt={currentProduct.name}
          />
          
          <br />
        
          <p className="description">{currentProduct.description}</p>
         
            <p>
              <p className="price"><strong>Price:</strong>${currentProduct.price}
              {' '}
                <br />
              </p>
              
              
              <br />
              <button className="button" onClick={addToCart}>Add to Cart</button>
              <button
                className="button"
                disabled={!cart.find(p => p._id === currentProduct._id)}
                onClick={removeFromCart}
              >
                Remove from Cart
                </button>
            </p>

        </Container>
      ) : null}
    </>

  );
}

export default Detail;