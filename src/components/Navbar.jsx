/* eslint-disable react/prop-types */
import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = ({ onCityChange, onAddPlace }) => {
  const [showModal, setShowModal] = useState(false);
  const [newPlace, setNewPlace] = useState({ city: '', image: '', title: '', description: '' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPlace({ ...newPlace, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlace(newPlace);
    setShowModal(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-lg sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Your Favourite Locations</div>
        <div className="flex space-x-4 sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:bg-blue-700 px-3 py-2 rounded transition duration-200 transform hover:scale-110"
          >
            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
        <div className={`flex-col sm:flex sm:flex-row sm:space-x-4 mt-2 sm:mt-0 ${isMenuOpen ? 'flex' : 'hidden'}`}>
          {['All', 'Lahore', 'Karachi', 'Islamabad', 'Peshawar', 'Quetta', 'Kashmir'].map((city) => (
            <button
              key={city}
              onClick={() => onCityChange(city)}
              className="text-white hover:bg-blue-700 px-3 py-2 rounded transition duration-200 transform hover:scale-110"
            >
              {city}
            </button>
          ))}
          <button
            onClick={() => setShowModal(true)}
            className="text-white bg-green-500 hover:bg-green-700 px-3 py-2 rounded transition duration-200 transform hover:scale-110"
          >
            Add Place
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg animate-fade-in-down w-full max-w-lg">
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
                  onClick={() => setShowModal(false)}
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
