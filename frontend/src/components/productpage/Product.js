import React, {useContext} from 'react'
import styling from '../productpage/product.module.css';
import { ShopContext } from '../../context/Shop-context';
import { Link } from 'react-router-dom';

export default function Product(props) {

  const { id } = props;
  const { name, price, image } = props.data;




  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  
  return (
    <>
      <div className={styling.productContainer}>
      <Link to={`/productinfo/${id}`} product={props.product}>
        <img alt='product' src={image} className={styling.productImg} ></img>
      </Link>
        <p className={styling.name}> {name} </p>
        <p className={styling.price}>{price} DKK</p>
<button className={styling.btn} onClick={() => {
  addToCart(id);
}}>Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</> }</button>
      </div>
    </>
  )
}

