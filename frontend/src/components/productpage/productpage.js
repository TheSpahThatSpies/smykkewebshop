import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';
import Footer from '../indexpage/Footer';
import styling from '../productpage/productpage.module.css';
import HeroForProductpage from './HeroForProductpage';
import { ShopContext } from '../../context/Shop-context';

function Home() {
  const { products } = useContext(ShopContext);
  const { category, searchQuery } = useParams();

  // Filter the products based on the search query or category
  const filteredProducts = searchQuery
  ? products.filter((product) =>
      product.acf.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  : category
    ? products.filter((product) => product.acf.category === category)
    : products;


  return (
    <>
      <HeroForProductpage category={category} searchQuery={searchQuery} ></HeroForProductpage>

      <div className={styling.shop}>
        <div className='shopTitle'>
        <h1>{searchQuery ? `SEARCH RESULTS FOR: ${searchQuery.toLowerCase()}` : category ? category.toUpperCase() : 'ALL PRODUCTS'}</h1>
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
