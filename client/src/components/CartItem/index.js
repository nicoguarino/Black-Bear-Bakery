import React from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";
import './style.css';

const CartItem = ({ item }) => {
  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART, 
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });
  };
  

const onChange = (e) => {
  const value = e.target.value;

  if (value === '0') {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
  
    idbPromise('cart', 'delete', { ...item });
  } else {
    dispatch({
      type: UPDATE_CART_QUANTITY,
      _id: item._id,
      purchaseQuantity: parseInt(value)
    });
  
    idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
  }
  
};


  return (
    <div className="flex-row cart-list">
      <div className="cart-img-box">
        <img
          src={`/images/${item.image}`}
          alt=""
          className="cart-img"
        />
      </div>
      <div>
        <div className="item">{item.name}, ${item.price}</div>
        <div>
          <span>Qty: </span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
            className="cart-qty"
          />
          <span
          role="img"
          aria-label="trash"
          onClick={() => removeFromCart(item)}
          className="remove-from-cart"
        >
          🗑️
        </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
