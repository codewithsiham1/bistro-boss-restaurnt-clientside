import React, { useState } from 'react';

const UpdateItemForm = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [recipe, setRecipe] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Just console log for now, no backend
    console.log({ name, image, price, category, recipe });
    alert('Form submitted! Check console for data.');
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Update Item</h2>

        <form onSubmit={handleSubmit} className="card bg-base-100 shadow-lg p-6 rounded-lg w-full">
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Item Name"
              className="input input-bordered"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              placeholder="Image URL"
              className="input input-bordered"
              value={image}
              onChange={e => setImage(e.target.value)}
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered"
              value={price}
              onChange={e => setPrice(e.target.value)}
              min={0}
              step="0.01"
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              placeholder="Category"
              className="input input-bordered"
              value={category}
              onChange={e => setCategory(e.target.value)}
              required
            />
          </div>

          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text">Recipe</span>
            </label>
            <textarea
              placeholder="Recipe details"
              className="textarea textarea-bordered h-24"
              value={recipe}
              onChange={e => setRecipe(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Update Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItemForm;
