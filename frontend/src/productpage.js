
import Footer from './components/indexpage/Footer';
import Nav from './components/nav';

function Productpage() {

  return (

  <>
    <Nav />
    <div className='container-2xl h-fit mx-auto p-3 flex flex-col md:flex-row'>
        <div className='flex flex-col'>

            <div className='h-96 mb-3'>
                <img className='h-full w-full' alt='jewels' src='https://dirksjewellery.dk/wp-content/uploads/2023/01/Herobanner_smykker.png'></img>
            </div>

            <div className='flex flex-row'>
                <div className='h-36 w-36 bg-black'></div><div className='h-36 w-36 ml-1 bg-black'></div>
            </div>
        </div>

        <div className='md:ml-3'>
            <p className='text-4xl'>Name of product</p>
            <p className='text-lg'>Category</p>
            <p className='text-md'>
            Product description - Lots of fancy words
            About this product, like how it was made 
            Who it was made for and maybe some other
            Smart words.
            </p>
            <p className='text-md'>$Price</p>
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

export default Productpage;