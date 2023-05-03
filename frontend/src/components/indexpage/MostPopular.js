import React, { useState, useContext } from 'react'
import styling from './Mostpopular.module.css';
import Product from './MostPopularProduct';
import { ShopContext } from '../../context/Shop-context';


export default function MostPopular() {
  const { products, setProducts } = useContext(ShopContext);

  const limitedProducts = products.slice(0, 5);


  return (
    <>
    <h1 className={styling.over}>Most popular</h1>
    <div className={styling.container}>
      {limitedProducts && limitedProducts.map(product => 
        <Product
        key={product.id} id={product.id} data={product.acf} 
        />
      )}
    </div>
  </>
  )
}
