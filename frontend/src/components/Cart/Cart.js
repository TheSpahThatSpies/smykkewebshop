import React, { useContext } from 'react';
import { ShopContext } from '../../context/Shop-context';
import CardItem from './CartItem';
import styling from './Cart.module.css';
import { Link } from 'react-router-dom';

export default function Card() {
  const { cartItems, getTotalCartAmount, products } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const UI = totalAmount > 0 ?
    <div className={styling.container}>
      <h1 className={styling.overskrift}>Your cart items</h1>
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
        <div className='flex flex-col md:flex-row w-full align-center items-center justify-center mt-5'>
        <button className={styling.checkOut}>Check out</button>
        <Link to={'/'} className={styling.continue}>
         Continue shopping
        </Link>
        </div>

      </div>
    </div> : <p className={styling.emptyBasket}>Your basket is empty.</p>

  return <>{UI}</>;
}

