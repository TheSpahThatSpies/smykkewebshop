import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Productinfo from './pages/productinfo';
import Nav from './components/nav';
import Cart from './pages/cart';

function App() {

  return (

  <>
  <Nav />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/productinfo" element={<Productinfo />} />
       </Routes>
  </>

  
);
}

export default App;
