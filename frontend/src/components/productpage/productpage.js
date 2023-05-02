import { useContext, useEffect } from 'react';
import Product from './Product';
import Footer from '../indexpage/Footer';
import styling from '../productpage/productpage.module.css';
import HeroForProductpage from './HeroForProductpage';
import { ShopContext } from '../../context/Shop-context';

function Home() {
  const { products, setProducts } = useContext(ShopContext);


  return (
    <>
      <HeroForProductpage></HeroForProductpage>

      <div className={styling.shop}>
        <div className='shopTitle'>
          <h1>ALL PRODUCTS</h1>
        </div>

        <div className={styling.container}>
          {products.map((product) => (
            <Product key={product.id} id={product.id} data={product.acf} />
          ))}
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Home;
