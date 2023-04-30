import Hero from '../components/indexpage/Hero'
import {PRODUCTS} from '../Products';
import Product from './Product';
import styling from '../components/indexpage/Mostpopular.module.css';


function Home() {

  return (

  <>
    <Hero></Hero>

    <div className='shop'>
      <div className='shopTitle'>
        <h1>JOC SHOP</h1>
      </div>
      <div className={styling.container}>
        {PRODUCTS.map((product) => {
          return <Product data={product}/>
        })}
      </div>

    </div>

  </>

  
);
}

export default Home;