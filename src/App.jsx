import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Locations from './components/Locations';

const App = () => {
  const [city, setCity] = useState('All');
  const [locations, setLocations] = useState([
    { id: 1, city: 'Lahore', image: 'image1.jpg', title: 'Badshahi Mosque', description: 'A historical mosque.' },
    { id: 2, city: 'Karachi', image: 'image2.jpg', title: 'Clifton Beach', description: 'A famous beach.' },
    { id: 3, city: 'Islamabad', image: 'image3.jpg', title: 'Faisal Mosque', description: 'A major mosque in Islamabad.' },
    { id: 4, city: 'Islamabad', image: 'image4.jpg', title: 'Daman-e-Koh', description: 'A viewpoint in Islamabad.' },
    { id: 5, city: 'Peshawar', image: 'image5.jpg', title: 'Qissa Khwani Bazaar', description: 'A historic market in Peshawar.' },
    { id: 6, city: 'Peshawar', image: 'image6.jpg', title: 'Bala Hisar Fort', description: 'A historic fort in Peshawar.' },
    { id: 7, city: 'Quetta', image: 'image7.jpg', title: 'Hanna Lake', description: 'A lake near Quetta.' },
    { id: 8, city: 'Quetta', image: 'image8.jpg', title: 'Quaid-e-Azam Residency', description: 'A historical building in Quetta.' },
    { id: 9, city: 'Kashmir', image: 'image9.jpg', title: 'Neelum Valley', description: 'A beautiful valley in Kashmir.' },
    { id: 10, city: 'Kashmir', image: 'image10.jpg', title: 'Ratti Gali Lake', description: 'A high-altitude lake in Kashmir.' },
  ]);

  const handleCityChange = (selectedCity) => {
    setCity(selectedCity);
  };

  const handleAddPlace = (newPlace) => {
    setLocations([...locations, { id: locations.length + 1, ...newPlace }]);
  };

  const handleDelete = (id) => {
    setLocations(locations.filter(location => location.id !== id));
  };

  const handleUpdate = (id) => {
    const updatedImage = prompt('Enter new image URL:');
    const updatedTitle = prompt('Enter new title:');
    const updatedDescription = prompt('Enter new description:');
    setLocations(
      locations.map(location =>
        location.id === id ? { ...location, image: updatedImage, title: updatedTitle, description: updatedDescription } : location
      )
    );
  };

  return (
    
    <div className="bg-gray-100 min-h-screen">
      <Navbar onCityChange={handleCityChange} onAddPlace={handleAddPlace} />
      <Locations city={city} locations={locations} onDelete={handleDelete} onUpdate={handleUpdate} />
    </div>
 
  );
};

export default App;