import {PRODUCTS} from '../../Products';
import Product from './Product';
import Footer from '../indexpage/Footer';
import styling from '../productpage/productpage.module.css';
import HeroForProductpage from './HeroForProductpage';


function Home() {

  return (

  <>
    <HeroForProductpage></HeroForProductpage>

    <div className={styling.shop}>

      <div className='shopTitle'>
        <h1>ALL PRODUCTS</h1>
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