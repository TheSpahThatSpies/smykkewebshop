import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Productpage from './pages/productpage';
import Nav from './components/nav';

function App() {

  return (

  <>
  <Nav />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productpage" element={<Productpage />} />
       </Routes>
  </>

  
);
}

export default App;
