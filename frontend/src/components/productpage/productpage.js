import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';
import Footer from '../indexpage/Footer';
import styling from '../productpage/productpage.module.css';
import HeroForProductpage from './HeroForProductpage';
import { ShopContext } from '../../context/Shop-context';

function Home() {
  const { products, setProducts } = useContext(ShopContext);
  const { category } = useParams();

  useEffect(() => {
    document.title = category ? `${category.toUpperCase()} | My Shop` : 'My Shop';
  }, [category]);

  // Filter the products that match the selected category
  const filteredProducts = category
    ? products.filter((product) => product.acf.category === category)
    : products;

  return (
    <>
      <HeroForProductpage category={category}></HeroForProductpage>

      <div className={styling.shop}>
        <div className='shopTitle'>
          <h1>{category ? category.toUpperCase() : 'ALL PRODUCTS'}</h1>
        </div>

        <div className={styling.container}>
        {filteredProducts.map((product) => (
            <Product key={product.id} id={product.id} data={product.acf} />
          ))}
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Home;
