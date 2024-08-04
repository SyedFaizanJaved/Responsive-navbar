import React, { useState } from 'react';

const Card = ({ id, image, title, description, onDelete, onUpdate }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleDelete = () => {
    onDelete(id);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000); // Hide alert after 3 seconds
  };

  const handleUpdate = () => {
    onUpdate(id);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000); // Hide alert after 3 seconds
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
      <img className="w-full h-45 object-cover transition-transform duration-300 hover:scale-110" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <button
          onClick={handleUpdate}
          className="bg-blue-500 text-white px-3 py-1 rounded-sm text-sm mr-2 hover:bg-blue-700 transition duration-200 transform hover:scale-110"
        >
          Update
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-3 py-1 rounded-sm text-sm hover:bg-red-700 transition duration-200 transform hover:scale-110"
        >
          Delete
        </button>
      </div>
      {showAlert && (
        <div className="absolute bottom-0 right-0 bg-green-500 text-white py-2 px-4 m-4 rounded shadow-md">
          Action successful!
        </div>
      )}
    </div>
  );
};

export default Card;