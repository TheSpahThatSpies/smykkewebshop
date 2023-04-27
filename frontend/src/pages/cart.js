
import Footer from '../components/indexpage/Footer';

function Cart() {

  return (

  <>
    <div className='container-2xl h-fit mx-auto p-3 flex flex-col md:flex-row'>

        <div className='flex flex-col md:w-1/2'>
        <p className='text-3xl'>Cart</p>

                        <ul class=" divide-y divide-gray-200 dark:divide-gray-700">
                <li class="pb-3 sm:pb-4">
                    <div class="flex items-center space-x-4">
                        <div class="flex-shrink-0 bg-black">
                            <img class="w-14 h-14 " src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"></img>
                        </div>
                        <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-gray-900">
                            Name of product
                            </p>
                            <p class="text-sm text-gray-500">
                            description
                            </p>
                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            $Price
                            </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900">
                            
                        </div>
                    </div>
                </li>
                <li class="pb-3 sm:pb-4">
                    <div class="flex items-center space-x-4">
                        <div class="flex-shrink-0 bg-black">
                            <img class="w-14 h-14 " src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"></img>
                        </div>
                        <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-gray-900">
                            Name of product
                            </p>
                            <p class="text-sm text-gray-500">
                            description
                            </p>
                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            $Price
                            </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900">
                            
                        </div>
                    </div>
                </li>
                </ul>


        </div>

        <div className='md:ml-3 md:w-1/2 min-h-[100%] border-solid border-slate-100 flex flex-col justify-between'>
        <p className='text-3xl'>CHECKOUT</p>
        <div className='flex justify-between'> <div className='flex w-1/2 justify-between'><p>NOP</p><p>$PRICE</p><p>AMOUT</p></div> <p>= $TOTAL</p></div>
        <div>
            <div className='flex justify-between'><p>TOTAL</p><p>= TOTAL</p></div>
                <button class="border-2 border-slate-800 w-full  py-2 text-slate-800 cursor-pointer hover:bg-gray-800 hover:text-gray-200">
                    GO TO PAYMENT
                </button>
            </div>
        </div>
    </div>
    <Footer></Footer>
  </>

  
);
}

export default Cart;