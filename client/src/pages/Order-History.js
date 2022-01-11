import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="container my-2" >
        <Link className='' to="/store">← Back to Products</Link>
        {user ? (
          <>
            <h2>
              Order History for {user.firstName} {user.lastName}
            </h2>
            {user.orders.map((order) => (     
              <div key={order._id} className="flex-row order" style={{ paddingBottom:'20px' }} >
                <h3 className='price-per-dozen history-date'>
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>
                <div className="flex-row history-details">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="product-item">
                      <Link to={`/products/${_id}`}>
                        <img className='image history-img' alt={name} src={`/images/${image}`} />
                        <p className='product-name'>{name}</p>
                      </Link>
                      <div style={{ textAlign: "center" }}>
                        <span className='product-price'>${price}</span>
                      </div>

                    </div>  

                  ))}
                </div>
              </div>

            ))}

          </>
        ) : null}
      </div>
    </>
  );
}

export default OrderHistory;
