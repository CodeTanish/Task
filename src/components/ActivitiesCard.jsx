import React from 'react';
import DataCard from './DataCard';

const ActivitiesCard = () => {
  return (
    <div className="w-[360px] h-[160px] rounded-[12px] p-4 ml-[20px] mt-[16px] flex flex-col justify-between  dark:bg-[#333333]">
      
      {/* Header Section */}
      <div className="flex gap-3 items-center">
        <div className="w-[163px] h-[28px] flex items-center gap-[8px]">

          {/* Day Plan Tag */}
          <div
            className="w-[73px] h-[28px] bg-[#313DDF] text-white rounded-[8px] flex items-center justify-center dark:bg-[#D3F462]"
            style={{
              fontFamily: 'Montserrat',
              fontWeight: 600,
              fontSize: '12px',
              lineHeight: '12px',
              letterSpacing: '0%',
              verticalAlign: 'middle',
            }}
          >
            Day Plan
          </div>

          {/* Activities Tag */}
          <div
            className="w-[82px] h-[28px] border border-[#313DDF] text-[#313DDF] rounded-[8px] flex items-center justify-center dark:border dark:border-[#D3F462] dark:text-[#D3F462]"
            style={{
              fontFamily: 'Montserrat',
              fontWeight: 600,
              fontSize: '12px',
              lineHeight: '12px',
              letterSpacing: '0%',
              verticalAlign: 'middle',
            }}
          >
            14 Activities
          </div>
        </div>
      </div>

      {/* Data Cards Section */}
      <div className="w-full h-[44px] flex justify-start overflow-x-auto gap-4 scrollbar-hide">
        <DataCard month="Jan" day="Mon" date="27" />
        <DataCard month="Feb" day="Tue" date="28" />
        <DataCard month="Mar" day="Wed" date="29" />
        <DataCard month="Apr" day="Thu" date="30" />
      </div>
    </div>
  );
};

export default ActivitiesCard;
