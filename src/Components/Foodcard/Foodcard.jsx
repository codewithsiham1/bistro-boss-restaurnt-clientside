import React from 'react';

const Foodcard = ({ item }) => {
  const { name, image, recipe, price } = item;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl border relative">
      <figure>
        <img src={image} alt={name} className="h-64 w-full object-cover" />
      </figure>
      
      {/* Price Tag Top Right */}
      <p className="absolute right-4 top-4 bg-black text-white px-3 py-1 rounded font-semibold">${price}</p>
      
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center mt-4">
          <button className="btn btn-outline border-0 border-b-4 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Foodcard;
