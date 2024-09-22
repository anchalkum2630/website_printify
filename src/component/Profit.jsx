import React from 'react'
import image from '../assets/clothes-mobile-Q6UN6X6P.webp';
const Profit = () => {
  return (
    
      <div className=' w-[95%] sm:w-[80%] lg:w-[60%] rounded-3xl border shadow mx-auto my-24 py-12 px-4 text-white bg-[#203741]'>
         <h1 className='sm:text-[32px] text-[20px] m-2'><b>Make Money, Risk-Free</b></h1>
         <p className='mb-8 m-2'>You pay for fulfillment only when you make a sale</p>
         <div className='flex justify-between bg-[#17262b] sm:font-semibold rounded-lg m-2 p-4'>
           <div className='w-[80%] sm:w-[50%]'> 
             <p className='m-4'>You sell a t-shirt</p>
             <p className='m-4'>You pay for its production</p>
             <hr></hr>
             <p className='m-4 text-[22px] text-green-500'>Your Profit</p>
           </div>
           <div className=' w-[20%] sm:w-[50%] text-right'>
             <p className='m-4'>$30</p>
             <p className='m-4'>$12</p>
             <hr></hr>
             <p className='m-4 text-[22px] text-green-500'>$18</p>
           </div>
         </div>
         <button className='mt-8 m-2 bg-green-500 rounded px-4 py-2 font-semibold'>Start selling</button>
         <p className='text-gray-300 m-2'>100% Free to use . 900+ Products. Largest print network</p>
      </div>
  )
}

export default Profit
