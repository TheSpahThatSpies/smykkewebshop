import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Productinfo from './pages/productinfo';
import ProductPage from './components/productpage/productpage';
import Nav from './components/nav';
// import Cart from './pages/cart';
import Shopcontext from './context/Shop-context';
import Card from './components/Card/Card';

function App() {

  return (

  <>
    <Shopcontext>
      <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/cart' element={<Card />} />
            <Route path='/products' element={<ProductPage />} />
            <Route path="/productinfo" element={<Productinfo />} />
        </Routes>
    </Shopcontext>
  </>

  
);
}

export default App;
