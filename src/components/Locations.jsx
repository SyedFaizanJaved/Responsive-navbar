import React from 'react';
import Card from './Card';

const Locations = ({ city, locations, onDelete, onUpdate }) => {
  const filteredLocations = city === 'All' ? locations : locations.filter(location => location.city === city);

  return (
    <div className="container mx-auto p-4 flex flex-wrap justify-center">
      {filteredLocations.map((location) => (
        <Card
          key={location.id}
          id={location.id}
          image={location.image}
          title={location.title}
          description={location.description}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default Locations;