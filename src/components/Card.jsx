import React from 'react';
import { FiCalendar, FiUsers, FiActivity } from 'react-icons/fi';

const Card = () => {
  const imageUrl =
    'https://images.unsplash.com/photo-1558981404-937f24f2b2b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';

  return (
    <div className="relative w-full sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] h-[330px] mt-4 overflow-hidden rounded-2xl shadow-md bg-gray-300">
      {/* Image */}
      <img
        src={imageUrl}
        alt="Tokyo"
        className="object-cover w-full h-full"
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 pointer-events-none" />

      {/* City Name */}
      <div
        className="absolute text-white font-[MODERNIZ] font-black text-[40px] leading-[24px]"
        style={{ width: '206px', height: '43px', top: '23px', left: '16px' }}
      >
        Tokyo
      </div>

      {/* Date */}
      <div
        className="absolute text-white font-[Montserrat] font-semibold text-[12px] leading-[16px]"
        style={{ width: '138px', height: '16px', top: '69px', left: '16px' }}
      >
        12-05-2025 - 20-05-2025
      </div>

      {/* Bottom Info Section */}
      <div className="absolute bottom-4 left-4 right-4 bg-opacity-90 p-3 rounded-lg flex justify-between items-center text-white backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <FiCalendar className="text-lg text-blue-500" />
          <div className="flex flex-col">
            <span className="font-[Montserrat] font-semibold text-[12px] leading-[12px]">
              Duration
            </span>
            <span className="font-[Montserrat] text-[12px] leading-[12px]">
              8 Days
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <FiUsers className="text-lg text-green-500" />
          <div className="flex flex-col">
            <span className="font-[Montserrat] font-semibold text-[12px] leading-[12px]">
              Group Size
            </span>
            <span className="font-[Montserrat] text-[12px] leading-[12px]">
              4 People
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <FiActivity className="text-lg text-orange-500" />
          <div className="flex flex-col">
            <span className="font-[Montserrat] font-semibold text-[12px] leading-[12px]">
              Activities
            </span>
            <span className="font-[Montserrat] text-[12px] leading-[12px]">
              5 Planned
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
