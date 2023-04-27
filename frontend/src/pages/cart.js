
import Footer from '../components/indexpage/Footer';

function Cart() {

  return (

  <>
    <div className='container-2xl h-fit mx-auto p-3 flex flex-col md:flex-row'>

        <div className='flex flex-col'>
        <p className='text-3xl'>Cart</p>
        <dl class="max-w-md text-gray-900 divide-y divide-gray-200 divide-gray-700">
            <div class="flex flex-col pb-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email address</dt>
                <dd class="text-lg font-semibold">yourname@flowbite.com</dd>
            </div>
            <div class="flex flex-col py-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Home address</dt>
                <dd class="text-lg font-semibold">92 Miles Drive, Newark, NJ 07103, California, USA</dd>
            </div>
            <div class="flex flex-col pt-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone number</dt>
                <dd class="text-lg font-semibold">+00 123 456 789 / +12 345 678</dd>
            </div>
        </dl>

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

export default Cart;