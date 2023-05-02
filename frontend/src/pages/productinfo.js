import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/Shop-context';
import Footer from '../components/indexpage/Footer';


function Productinfo() {

    const { id } = useParams();
  const { products } = useContext(ShopContext);
  const product = products.find((product) => product.id === parseInt(id));

  const { name, category, price, description, image } = product.acf;

  return (

  <>
    <div className='container-2xl h-fit mx-auto p-3 flex flex-col md:flex-row'>
        <div className='flex flex-col'>

            <div className='h-96 mb-3'>
                <img className='h-full w-full' alt='jewels' src={image} ></img>
            </div>

            <div className='flex flex-row'>
                <div className='h-36 w-36 bg-black'></div><div className='h-36 w-36 ml-1 bg-black'></div>
            </div>
        </div>

        <div className='md:ml-3'>
            <p className='text-4xl'>{name}</p>
            <p className='text-lg'>{category}</p>
            <p className='text-md'>
           {description}
            </p>
            <p className='text-md'>${price}</p>
            <button class="border-2 border-slate-800 w-full md:w-64  py-2 text-slate-800 cursor-pointer hover:bg-gray-800 hover:text-gray-200">
             ADD TO CART
            </button>
            <p className='text-md'>Stock information</p>
        </div>
    </div>
    <Footer></Footer>
  </>

  
);
}

export default Productinfo;