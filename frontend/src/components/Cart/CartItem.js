import React, { useContext } from 'react';
import styling from './CartItem.module.css';
import { ShopContext } from '../../context/Shop-context';

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
      <img alt="product" className={styling.img} src={image} />
      <div className='text-left'>
      <p className='font-bold'> {name} </p>
      <p className='font-extralight'>{price} DKK</p>
      </div>
      <div className={styling.howMany}>
        <button className={styling.btnn} onClick={() => removeFromCart(id)}>
          -
        </button>
        <input value={cartItems[id]} />
        <button className={styling.btnn} onClick={() => addToCart(id)}>
          +
        </button>
      </div>
    </div>
  );
}
