import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Productinfo from './pages/productinfo';
import ProductPage from './pages/productpage';
import Nav from './components/nav';

function App() {

  return (

  <>
  <Nav />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/productinfo" element={<Productinfo />} />
       </Routes>
  </>

  
);
}

export default App;
