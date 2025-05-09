import React from 'react';
import TouristCard from './TouristCard';

const Tourist = () => {
  return (
    <>
      <div className='w-[212px] h-[20px] ml-[20px] flex items-center justify-start mt-[24px] gap-[18px]'>
        {/* Day and Date */}
        <div className='bg-[#3643FB] w-[112px] h-[20px] flex flex-row justify-between items-center px-[6px] text-white rounded-[4px] dark:text-[#0B0809] dark:bg-[#D3F462]'>
          <span
            style={{
              fontFamily: 'Mont',
              fontWeight: 600,
              fontSize: '12px',
              lineHeight: '12px',
              letterSpacing: '0%',
              verticalAlign: 'middle',
            }}
          >Day 1</span>
          <span
            style={{
              fontFamily: 'Mont',
              fontWeight: 600,
              fontSize: '12px',
              lineHeight: '12px',
              letterSpacing: '0%',
              verticalAlign: 'middle',
            }}
          >27.01.2025</span>
        </div>

        {/* Activity Count */}
        <span className='dark:text-[#D3F462]'>3 Activities</span>
      </div>

      {/* Tourist Cards Container */}
      <div className='w-[353px] h-[429px] flex flex-col ml-[20px] mt-[24px] gap-[16px] overflow-y-auto dark:border dark:border-[#D3F462]'>
        <TouristCard
          imageUrl="https://via.placeholder.com/120"
          name="Eiffel Tower"
          timing="9 AM - 11 PM"
          duration="5 hours"
          pickup="Available"
        />
        <TouristCard
          imageUrl="https://via.placeholder.com/120"
          name="Great Wall of China"
          timing="8 AM - 5 PM"
          duration="4 hours"
          pickup="Not Available"
        />
        <TouristCard
          imageUrl="https://via.placeholder.com/120"
          name="Statue of Liberty"
          timing="9 AM - 6 PM"
          duration="3 hours"
          pickup="Available"
        />
        <TouristCard
          imageUrl="https://via.placeholder.com/120"
          name="Colosseum"
          timing="10 AM - 4 PM"
          duration="2 hours"
          pickup="Available"
        />
      </div>
    </>
  );
};

export default Tourist;
