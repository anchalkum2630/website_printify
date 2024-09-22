import React from 'react';

const Feature_component = ({ img, head, content }) => {
  return (
    <div className="text-center sm:text-left max-w-xs mx-auto my-4 p-4">
      <div className="w-36 h-36 flex justify-center sm:justify-start items-center sm:items-start mx-auto sm:mx-0">
        <img src={img} alt={head} className="max-w-full max-h-full object-contain" />
      </div>
      <div className="mt-4">
        <p className="text-[24px] font-bold text-center sm:text-left">{head}</p>
      </div>
      <div className="mt-2 text-center sm:text-left">
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Feature_component;
