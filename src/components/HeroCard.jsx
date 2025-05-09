import React from 'react';
import Card from './Card';

const HeroCard = () => {
  return (
    <div className="flex flex-col mt-6 ml-5">
      <h3 className="text-2xl font-bold mb-4">Your Upcoming Trip</h3>
      <Card />
    </div>
  );
};

export default HeroCard;
