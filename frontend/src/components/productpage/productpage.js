import {PRODUCTS} from '../../Products';
import Product from './Product';
import Footer from '../indexpage/Footer';
import Hero from '../indexpage/Hero';
import styling from '../productpage/productpage.module.css';


function Home() {

  return (

  <>
    <Hero></Hero>

    <div className={styling.shop}>

      <div className='shopTitle'>
        <h1>JOC SHOP</h1>
      </div>
      <div className={styling.container}>
        {PRODUCTS.map((product) => {
          return <Product data={product}/>
        })}
      </div>

    </div>

    <Footer></Footer>


  </>

  
);
}

export default Home;