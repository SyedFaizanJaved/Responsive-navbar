import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPlace = ({ onAddPlace }) => {
  const [newPlace, setNewPlace] = useState({ city: '', image: '', title: '', description: '' });
  const Navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPlace({ ...newPlace, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlace(newPlace);
    Navigate.push('/locations');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Add New Place</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">City</label>
          <input
            type="text"
            name="city"
            value={newPlace.city}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            type="url"
            name="image"
            value={newPlace.image}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={newPlace.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={newPlace.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          ></textarea>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => Navigate.push('/locations')}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200 transform hover:scale-110"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200 transform hover:scale-110"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPlace;