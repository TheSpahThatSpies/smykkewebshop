import React, {useContext} from 'react';
import {PRODUCTS} from '../../Products';
import { ShopContext } from '../../context/Shop-context';
import CardItem from './CartItem';
import styling from './Cart.module.css'


export default function Card() {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);

    const totalAmount = getTotalCartAmount();

  return (
    <>

        <div className={styling.container}>
          <h1 className='text-3xl'>your card items</h1>
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
            <p>total: {totalAmount} DKK</p>
            <button className={styling.continue}>Continue shopping</button>
            <button className={styling.checkOut}>Checkout</button>
          </div>

        </div>

    </>
  )
}
