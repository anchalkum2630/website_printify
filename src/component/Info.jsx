import React from 'react';
import img from '../assets/clothes-mobile-Q6UN6X6P.webp';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Info = () => {
  return (
    <div className='border shadow bg-gray-100'>
    <div
      className='w-[70%] bg-white rounded-3xl flex flex-col lg:flex-row items-center justify-center mx-auto my-16 border shadow'
      style={{ fontFamily: "CerebriSans, sans-serif" }}
    >
      {/* Image Section */}
      <div className='w-full h-full rounded-3xl lg:w-1/2 flex justify-center lg:p-12'>
        <motion.img
          src={img}
          alt="Product Image"
          className='rounded-3xl object-cover'
          initial={{ opacity: 0 , }}
          animate={{ opacity: 1, }}
          transition={{ duration: 0.7, delay: 0.3 }}
        />
      </div>

      {/* Text Section */}
      <motion.div
        className="w-full lg:w-1/2 text-center md:text-left p-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <h1 className='text-[30px] md:text-[35px] lg:text-[40px] font-bold text-black'>
          Easily add your design to a wide range of products
        </h1>

        <p className='text-gray-500 text-sm md:text-md lg:text-lg mt-3 font-medium leading-relaxed'>
          With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases,
          and hundreds of other products.
        </p>

        <div className='flex justify-center md:justify-start'>
          <a
            type="button"
            className="flex justify-between items-center gap-2 mt-3 text-green-700 font-bold rounded-lg  px-5 py-2.5 text-center mb-2"
          >
            All Products
            <ArrowRight />
          </a>
        </div>
      </motion.div>
    </div>
    </div>
  );
};

export default Info;