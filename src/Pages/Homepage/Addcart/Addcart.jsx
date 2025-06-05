import React, { useEffect, useState } from 'react';
import Sectiontitle from '../../../Components/Sectiontitle/Sectiontitle';

const CATEGORIES = ['dessert', 'salad', 'pizza'];

const Addcart = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('/Menu.json')
      .then(res => res.json())
      .then(data => {
        const selected = CATEGORIES
          .map(cat => data.find(item => item.category === cat))
          .filter(Boolean);

        setCards(selected);
      })
      .catch(err => console.error('Failed to load menu:', err));
  }, []);

  const handleAddToCart = (item) => {
    // এখানে তুমি চাইলে cart logic বা toast যুক্ত করতে পারো
    console.log('Added to cart:', item.name);
    alert(`✅ ${item.name} added to cart!`);
  };

  return (
 <section>
    <Sectiontitle heading={" CHEFE RECOMMENDS  "} subHeading={"Should Try"}></Sectiontitle>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mt-5">
      {cards.map(item => (
        <div key={item._id} className="card bg-base-100 shadow-xl w-96">
          <figure>
            <img src={item.image} alt={item.name} className="object-cover h-60 w-full" />
          </figure>

          <div className="card-body">
            <h2 className="card-title text-xl font-bold">{item.name}</h2>
            <p className="text-gray-600">{item.description || item.recipe}</p>

         

            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-primary btn-sm mt-4"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
 </section>
  );
};

export default Addcart;
