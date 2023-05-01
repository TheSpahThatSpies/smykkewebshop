import React, {useContext} from 'react';
import {PRODUCTS} from '../../Products';
import { ShopContext } from '../../context/Shop-context';
import CardItem from './CartItem';
import styling from './Cart.module.css'
import { Link } from 'react-router-dom';


export default function Card() {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);

    const totalAmount = getTotalCartAmount();

    const UI = totalAmount > 0 ? <div className={styling.container}>
    <h1 className={styling.overskrift}>your card items</h1>
    <ul class=" divide-y divide-gray-200 dark:divide-gray-700">
      <li className='listtt'>
        {PRODUCTS.map((product) => {
          if(cartItems[product.id] !== 0) {
          return <CardItem data={product}/>
          }
        })}
      </li>
    </ul>
    <div className={styling.center}>
      <p>total: <span>{totalAmount} DKK</span></p>
      <Link to={"/"}>
        <button className={styling.continue}>Continue shopping</button>
      </Link>
      <button className={styling.checkOut}>Check out</button>
    </div>
  </div> : <p className={styling.emptyBasket}>Your shopping basket is empty</p>

  return (
    <>
    {UI}
    </>
  )
}
