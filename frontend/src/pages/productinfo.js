import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/Shop-context';
import { Link } from 'react-router-dom';
import Footer from '../components/indexpage/Footer';


function Productinfo() {

    const { id } = useParams();
  const { products } = useContext(ShopContext);
  const product = products.find((product) => product.id === parseInt(id));

  const { name, category, price, description, image, stock } = product.acf;

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
  <nav aria-label="breadcrumb" class="w-full p-2  ">
	<ol class="flex h-3 space-x-2 text-slate-950">
		<li class="flex items-center">
			<a rel="noopener noreferrer" href="#" title="Back to homepage" class="flex font-extralight items-center hover:underline">Home</a>
		</li>
		<li class="flex items-center space-x-1">
			<span class="text-gray-900">/</span>
			<a rel="noopener noreferrer" href="#" class="flex font-extralight items-center px-1 capitalize hover:underline">{category}</a>
		</li>
		<li class="flex items-center space-x-1">
			<span class="text-gray-900">/</span>
			<a rel="noopener noreferrer" href="#" class="flex font-extralight items-center px-1 capitalize hover:underline hover:no-underline cursor-default">{name}</a>
		</li>
	</ol>
</nav>
    <div className='container-2xl  mx-auto p-3 flex flex-col md:flex-row md:justify-center mt-1'>
        <div className='flex flex-col md:w-1/2'>
            <div  className='h-96 md:w-full mb-3'>
                <img className='h-full w-full object-cover' alt='jewels' src={image} ></img>
            </div>
        </div>

        <div className='md:ml-3 md:w-1/2'>
            <p className='text-3xl md:text-4xl font-bold '>{name}</p>
            <p className='text-md mt-1 font-light'>{category}</p>
            <p className='text-sm mt-2'>
           {description}
            </p>
            <p className='text-md mt-2'>{price} DKK</p>
            <button class="border-2 border-slate-800 w-full md:w-64 mt-2  py-2 text-slate-800 cursor-pointer hover:bg-gray-800 hover:text-gray-200 flex justify-center" onClick={handleAddToCart} >
          {added ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>  : 'Add to cart'}
        </button>
        {stock > 0 ? (
        <div className="flex items-center mt-3">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <p className='text-md'>In Stock</p>
        </div>
    ) : (
        <p className='text-md text-red-500'>Out of Stock</p>
    )}
        </div>
    </div>
    <Footer></Footer>
  </>

  
);
}

export default Productinfo;