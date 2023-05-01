import React, {useContext} from 'react';
import {PRODUCTS} from '../../Products';
import { ShopContext } from '../../context/Shop-context';
import CardItem from './CartItem';


export default function Card() {
    const { cartItems } = useContext(ShopContext);

  return (
    <>
      <div className='container-2xl h-fit mx-auto p-3 flex flex-col md:flex-row'>

        <div className='flex flex-col md:w-1/2'>
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
        </div>

        <div className='md:ml-3 md:w-1/2 min-h-[100%] border-solid border-slate-100 flex flex-col justify-between'>

          <p className='text-3xl'>CHECKOUT</p>
          <div className='flex justify-between'> <div className='flex w-1/2 justify-between'><p>NOP</p><p>$PRICE</p><p>AMOUT</p></div> <p>= $TOTAL</p>
          </div>
          <div>
            <div className='flex justify-between'><p>TOTAL</p><p>= TOTAL</p></div>
              <button class="border-2 border-slate-800 w-full  py-2 text-slate-800 cursor-pointer hover:bg-gray-800 hover:text-gray-200">GO TO PAYMENT
              </button>
          </div>

        </div>
        
      </div>
    </>
  )
}
