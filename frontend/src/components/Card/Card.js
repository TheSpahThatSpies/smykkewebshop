import React, {useContext} from 'react';
import {PRODUCTS} from '../../Products';
import { ShopContext } from '../../context/Shop-context';
import CardItem from './CardItem';


export default function Card() {
    const { cartItems } = useContext(ShopContext);

  return (
    <div>
        <h1>your card items</h1>
        <div className='carditems'>
            {PRODUCTS.map((product) => {
                if(cartItems[product.id] !== 0) {
                   return <CardItem data={product}/>
                }
            })}
        </div>
    </div>
  )
}
