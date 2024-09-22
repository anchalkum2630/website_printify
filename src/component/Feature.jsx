import React from 'react';
import featureList from '../assets/feature_data.js'
import Feature_component from './Feature_component.jsx';

const Feature = () => {
  return (
    <div className='flex flex-col sm:flex-row w-[95%] mx-auto'>
      {
        featureList.map((item,i)=>(
          <Feature_component 
          key={i}
          img={item.img}
          head={item.head}
          content={item.content}
          />
        ))
      }
    </div>
  )
}

export default Feature
