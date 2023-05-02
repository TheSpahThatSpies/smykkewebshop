import React, { useContext } from 'react';
import { ShopContext } from '../../context/Shop-context';
import CardItem from './CartItem';
import styling from './Cart.module.css';
import { Link } from 'react-router-dom';

export default function Card() {
  const { cartItems, getTotalCartAmount, products } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const UI =
    <div className={styling.container}>
      <h1 className={styling.overskrift}>your cart items</h1>
      <ul class=" divide-y divide-gray-200 dark:divide-gray-700">
        <li className="listtt">

          {products.filter(product => cartItems[product.id] !== 0).map((product) => (
            <CardItem key={product.id} id={product.id} data={product.acf} />
          ))}
        </li>
      </ul>
      <div className={styling.center}>
        <p>
          total: <span>{totalAmount} DKK</span>
        </p>
        <Link to={'/'}>
          <button className={styling.continue}>Continue shopping</button>
        </Link>
        <button className={styling.checkOut}>Check out</button>
      </div>
    </div>

  return <>{UI}</>;
}

