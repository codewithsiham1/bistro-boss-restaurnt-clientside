import React from 'react';

const Menubistro = ({img,title,subtitle}) => {
    return (
           <div className='relative bg-cover  bg-center h-[500px] flex items-center justify-center'
              style={{
               backgroundImage:`url(${img})`
              }}>
                 <div className='bg-white bg-opacity-80 p-14 rounded-xl text-center max-w-4xl w-full h-[200px] flex flex-col justify-center items-center  shadow-lg'>
                   <h1 className='text-4xl font-bold text-gray-800 mb-4 uppercase'>{title}</h1>
                   <p className='text-gray-600 text-lg max-w-3xl text-center leading-relaxed'>{subtitle}</p>
               </div>
             </div>
    );
};

export default Menubistro;