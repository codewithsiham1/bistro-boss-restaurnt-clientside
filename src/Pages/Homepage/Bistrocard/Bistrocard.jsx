import React from 'react';
import bgimg from"../../../assets/home/chef-service.jpg"
const Bistrocard = () => {
    return (
      <div className='relative bg-cover  bg-center h-[500px] flex items-center justify-center'
       style={{
        backgroundImage:`url(${bgimg})`
       }}>
          <div className='bg-white bg-opacity-80 p-14 rounded-xl text-center max-w-5xl w-full h-[400px] flex flex-col justify-center items-center  shadow-lg'>
            <h1 className='text-4xl font-bold text-gray-800 mb-4 uppercase'>Bistrao Boss</h1>
            <p className='text-gray-600 text-lg max-w-3xl text-center leading-relaxed'> Discover a world of flavor crafted with passion. From hearty breakfasts 
              to elegant dinners — enjoy gourmet dishes in a cozy, modern setting.Step into a world of culinary delight where 
              every bite is crafted with care. Enjoy fresh</p>
        </div>
      </div>
    );
};

export default Bistrocard;