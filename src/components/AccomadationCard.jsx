import React from 'react';

const AccomadationCard = ({ 
  imageUrl = "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  hotelName = "Grand Tokyo Hotel",
  checkInDate = "12.05.2025",
  checkOutDate = "20.05.2025",
  nights = "8 Nights",
  status = "Confirmed" 
}) => {
  return (
    <div className="w-[198px] h-[239px]  rounded-[16px] overflow-hidden shadow-sm  shrink-0 mr-[16px]">
      
      <img
        src={imageUrl}
        alt={hotelName}
        className="w-full h-[124px] object-cover"
      />

      <div className="p-2 dark:bg-[#4D4D4D] bg-white">
        <h3 className="font-[Mont] font-[600] text-[14px] mb-[6px]">
          {hotelName}
        </h3>

        <div className="text-[12px] font-[Montserrat] mb-[4px] gap-3">
          <p>Check-in: {checkInDate}</p>
          <p>Check-out: {checkOutDate}</p>
        </div>

        <span className="text-[12px] font-[Montserrat] mb-[6px]">
          {nights}
        </span>

        <span
          className={`text-[12px] font-[Montserrat] font-[600] px-2 py-1 rounded-md ${
            status === "Confirmed" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};

export default AccomadationCard;
