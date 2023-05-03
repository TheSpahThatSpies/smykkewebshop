import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/Shop-context';
import Footer from '../components/indexpage/Footer';


function Productinfo() {

    const { id } = useParams();
  const { products } = useContext(ShopContext);
  const product = products.find((product) => product.id === parseInt(id));

  const { name, category, price, description, image } = product.acf;

  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(id);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 1000);
  };

  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (

  <>
    <div className='container-2xl  mx-auto p-3 flex flex-col md:flex-row md:justify-center'>
        <div className='flex flex-col md:w-1/2'>
            <div  className='h-96 md:w-full mb-3'>
                <img className='h-full w-full object-cover' alt='jewels' src={image} ></img>
            </div>
        </div>

        <div className='md:ml-3 w-1/2'>
            <p className='text-4xl'>{name}</p>
            <p className='text-lg'>{category}</p>
            <p className='text-md'>
           {description}
            </p>
            <p className='text-md'>${price}</p>
            <button class="border-2 border-slate-800 w-full md:w-64  py-2 text-slate-800 cursor-pointer hover:bg-gray-800 hover:text-gray-200 flex justify-center" onClick={handleAddToCart} >
          {added ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>  : 'Add to cart'}
        </button>
            <p className='text-md'>Stock information</p>
        </div>
    </div>
    <Footer></Footer>
  </>

  
);
}

export default Productinfo;