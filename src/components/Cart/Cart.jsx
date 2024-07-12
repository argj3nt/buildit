import React, { useContext, useState } from 'react';
import CartContext from '../CartContext/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, updateItemPrice, removeFromCart } = useContext(CartContext);
  const [prices, setPrices] = useState(cart.reduce((acc, item) => ({ ...acc, [item.id]: item.price }), {}));

  const handlePriceChange = (id, newPrice) => {
    setPrices({ ...prices, [id]: parseFloat(newPrice) || 0 });
    updateItemPrice(id, parseFloat(newPrice) || 0);
  };

  const totalPrice = cart.reduce((total, item) => total + prices[item.id], 0);

  return (
    <div className='maincart'>
      <div className='cart'>
        <h2>Shopping Cart ({cart.length})</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <ul className='cart-list'>
              {cart.map((item) => (
                <li key={item.id} className='cart-item'>
                  <div className='item-details'>
                    <h3>{item.name}</h3>
                    <span className='spanprice'>{item.price.toFixed(2)}$</span>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className='cartbutton'>Remove</button>
                </li>
              ))}
            </ul>
            <div className='total'>
              <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            </div>
            <div className='paycart'>
              <button className='paybutton'>PAY</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
