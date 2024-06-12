import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FoodItem from './FoodItem';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  
  const dispatch=useDispatch()
  const handleClearCart=()=>{
    dispatch(clearCart())

  }
  return (
    <div>
      <h1>cart Items-{cartItems.length}</h1>
      <button className='p-2 m-5 bg-green-100' onClick={()=>handleClearCart()}>Clear Cart</button>
      {cartItems.map((item) => (
        <FoodItem {...item.card.info} key={item.card.info.id} />
      ))}
    </div>
  );
};

export default Cart;
