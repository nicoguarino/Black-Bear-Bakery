import React from "react";
import { Link } from "react-router-dom";
// import { pluralize } from "../../utils/helpers"
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import './style.css';

function ProductItem(item) {
  const {
    image,
    name,
    _id,
    price,
  } = item;

  const [state, dispatch] = useStoreContext();
  const { cart } = state;

  const addToCart = () => {
    // find the cart item with the matching id
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
  
    // if there was a match, call UPDATE with a new purchase quantity
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  };

  return (

    <div class="product-item">
      <Link className="product-link" to={`/products/${_id}`}>
        <img
          className="image"
          alt={name}
          src={`/images/${image}`}
        />
        <p className="product-name">{name}</p>
      </Link>
      <div className="product-price">
        <span>${price}</span>
      </div>
      <button className="button" onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default ProductItem;