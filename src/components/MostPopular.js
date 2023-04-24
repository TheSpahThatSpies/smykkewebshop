import React, { useState } from 'react'
import styling from './Mostpopular.module.css';
import Product from './Product';


export default function MostPopular() {

  const [products, setProducts] = useState([
    {
      "id": 1,
      "name": "produkt 1",
      "price": 100,
      "image": "https://www.stokvaerk.dk/shared/62/554/pico-smykker-olive-grande-hoops-forgyldt_1180x1180c.jpg"
    },
    {
      "id": 2,
      "name": "produkt 2",
      "price": 299,
      "image": "https://www.stokvaerk.dk/shared/62/554/pico-smykker-olive-grande-hoops-forgyldt_1180x1180c.jpg"
    },
    {
      "id": 3,
      "name": "produkt 3",
      "price": 945,
      "image": "https://www.stokvaerk.dk/shared/62/554/pico-smykker-olive-grande-hoops-forgyldt_1180x1180c.jpg"
    },
    {
      "id": 4,
      "name": "produkt 4",
      "price": 379,
      "image": "https://www.stokvaerk.dk/shared/62/554/pico-smykker-olive-grande-hoops-forgyldt_1180x1180c.jpg"
    },
    {
      "id": 5,
      "name": "produkt 5",
      "price": 669,
      "image": "https://www.stokvaerk.dk/shared/62/554/pico-smykker-olive-grande-hoops-forgyldt_1180x1180c.jpg"
    }

  ]);


  return (
    <>

      <h1 className={styling.over}>most popular</h1>
      <div className={styling.container}>
        {products && products.map(product => 
                <Product
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                />
        )}
      </div>


    </>
  )
}
