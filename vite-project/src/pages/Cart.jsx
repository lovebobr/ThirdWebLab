import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';
import { Button } from '@mui/material';

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  let totalSum = 0;

  cart.forEach((item) => {
    totalSum += item.price * item.quantity;
  });
  return (
    <div>
      <main>
      <div className='headlines'><h1>Корзина</h1>
        <div className="total-sum">
              <h1>Общая сумма: {totalSum} $</h1>
            </div></div>
        {cart.length === 0 ? (
          <h3>Корзина пустая</h3>
        ) : (
          <div>
            <div className="cart_bug">
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    <img src={`./img/${item.img}`} alt={item.name} />
                    <span className="item-name">
                      {item.name} - {item.price} $ x {item.quantity}
                    </span>
                    <Button onClick={() => addToCart(item)}>+</Button>
                    <Button onClick={() => removeFromCart(item.id)}>-</Button>
                  </li>
                ))}
              </ul>
            </div>
            {/* 3. Отображаем общую сумму */}
            
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;