import React, { useContext } from 'react';
import styling from './CartItem.module.css';
import { ShopContext } from '../../context/Shop-context';
import { Link } from 'react-router-dom';

export default function CardItem({ id }) {
  const { cartItems, addToCart, removeFromCart, products } = useContext(
    ShopContext
  );
  const product = products.find((product) => product.id === id);

  if (!product) {
    return null;
  }

  const { name, price, image } = product.acf;

  return (
    <div className={styling.productContainer}>
      <Link to={`/productinfo/${id}`}>
      <img alt="product" className={styling.img} src={image} />
      </Link>
      <div className='text-left'>
      <p className='font-bold'> {name} </p>
      <p className='font-extralight'>{price} DKK</p>
      </div>
      <div className={styling.howMany}>
        <button className={styling.btnn} onClick={() => removeFromCart(id)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

        </button>
        <input value={cartItems[id]} />
        <button className={styling.btnn} onClick={() => addToCart(id)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

        </button>
      </div>
    </div>
  );
}
