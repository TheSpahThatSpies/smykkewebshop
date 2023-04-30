import React, { useState } from 'react'
import styling from './Mostpopular.module.css';
import Product from './MostPopularProduct';


export default function MostPopular() {

  const [products, setProducts] = useState([
    {
      "id": 1,
      "name": "produkt 1",
      "price": 100,
      "image": "https://dk.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw9af93c0c/productimages/singlepackshot/192634C01_RGB.png?sw=480&sh=480&sm=fit&sfrm=png&bgcolor=00000000"
    },
    {
      "id": 2,
      "name": "produkt 2",
      "price": 299,
      "image": "https://www.pindj.dk/productimages/pa782243c00/fullsize/3-pandora-charm-hjerte-elsker-dig-bedste-ven-inde-soelv-m-rosaforgyldt-hjerte.jpg"
    },
    {
      "id": 3,
      "name": "produkt 3",
      "price": 945,
      "image": "https://dk.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw256b1090/productimages/main/569285C00_RGB.png?sw=379&sh=379&sm=fit&sfrm=png&bgcolor=00000000"
    },
    {
      "id": 4,
      "name": "produkt 4",
      "price": 379,
      "image": "https://dk.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw0ae6bca6/productimages/singlepackshot/182629C01_RGB.png?sw=480&sh=480&sm=fit&sfrm=png&bgcolor=00000000"
    },
    {
      "id": 5,
      "name": "produkt 5",
      "price": 669,
      "image": "https://dk.pandora.net/on/demandware.static/-/Sites-da-DK-Library/default/dwa20922ea/images/size-guide/Pandora_Moments_Snake_Chain_Sliding_Bracelets.png"
    },
    {
      "id": 6,
      "name": "produkt 6",
      "price": 669,
      "image": "https://dk.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwda22fa13/productimages/singlepackshot/162627C01_RGB.png?sw=379&sh=379&sm=fit&sfrm=png&bgcolor=00000000"
      
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
