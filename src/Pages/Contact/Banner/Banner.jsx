import React from 'react';
import contactimg from "../../../assets/contact/banner.jpg";

const Banner = () => {
  return (
    <div
      className="relative w-full h-[500px] md:h-[600px] bg-cover bg-center flex items-center justify-center mb-10"
      style={{ backgroundImage: `url(${contactimg})` }}
    >
      {/* Centered Card */}
      <div className="bg-black bg-opacity-60 rounded-2xl p-12 max-w-6xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white uppercase">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mt-4">
          Feel free to reach out to us with any questions or feedback. We're here to help!
        </p>
      </div>
    </div>
  );
};

export default Banner;

