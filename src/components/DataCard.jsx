import React from 'react';

const DataCard = ({ month, day, date }) => {
  return (
    <div className="w-[73px] h-[44px] flex border border-[#313DDF] rounded-[8px] overflow-hidden dark:border-[#D3F462]">

      {/* Month Column - Vertical Display */}
      <div
        className="bg-[#313DDF] text-white w-[36px] h-[44px] flex items-center justify-center dark:bg-[#D3F462]"
        style={{
          fontFamily: 'Montserrat',
          fontWeight: 600,
          fontSize: '12px',
          lineHeight: '12px',
          letterSpacing: '0%',
          writingMode: 'vertical-lr',
          textOrientation: 'downright',
          transform: 'rotate(180deg)',
        }}
      >
        {month}
      </div>

      {/* Date and Day Column */}
      <div className="w-[37px] h-[44px] flex flex-col items-center justify-center dark:text-white">
        <p
          style={{
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '14px',
            letterSpacing: '0%',
            margin: 0,
          }}
        >
          {day}
        </p>
        <p
          style={{
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '16px',
            letterSpacing: '0%',
            margin: 0,
          }}
        >
          {date}
        </p>
      </div>
    </div>
  );
};

export default DataCard;
