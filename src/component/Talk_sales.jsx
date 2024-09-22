import React from 'react';
import TalkImage from '../assets/talk-to-sales-N2GDBAGC.svg';

const Talk_sales = () => {
  return (
    <div className="relative lg:w-[60%] w-[90%] bg-[#d8f3d8] mx-auto my-12 rounded-3xl overflow-hidden">
      {/* Main container */}

      {/* Text Content */}
      <div className="relative z-10 w-full py-4 px-16 lg:px-36 flex justify-between items-center">
        <p className="text-xl text-green-700 font-bold">
          Are you a large business looking for<br /> custom solutions?
        </p>

        <button className='border w-[60%] sm:py-2 sm:px-4 bg-white font-semibold hover:text-[#2d8245]'>
          Talk to sales
        </button>
      </div>

      {/* Image as Background */}
      <img
        src={TalkImage}
        alt="Example"
        className="absolute bottom-[-20%] right-0 w-1/2 h-auto object-cover rounded-2xl z-0"
      />
      {/* Positioned below the navbar */}
    </div>
  );
};

export default Talk_sales;
