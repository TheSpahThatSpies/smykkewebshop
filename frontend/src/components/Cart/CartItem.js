import React, {useContext} from 'react';
import styling from './CartItem.module.css';
import { ShopContext } from '../../context/Shop-context';


export default function CardItem(props) {

  const {id, name, price, image} = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <>
      <div className={styling.productContainer}>
        <img alt='product' className={styling.img} src={image}></img>
        <p className={styling.name}> {name} </p>
        <p className={styling.price}>{price} DKK</p>
        <div className='howMany'>
        <button className={styling.btnn} onClick={() => removeFromCart(id)}>-</button>
        <input value={cartItems[id]}/>
        <button className={styling.btnn} onClick={() => addToCart(id)}>+</button>
      </div>
      </div>
    </>
  )
}
