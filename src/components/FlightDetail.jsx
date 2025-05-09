import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const FlightDetail = () => {
  return (
    <div className="flex items-center justify-center bg-[#3643FB] w-[353px] h-[160px] mt-[32px] rounded-[16px] ml-[20px]">
      <div className="bg-[#313DDF] w-[336px] h-[148px] rounded-[12px] p-[16px] flex flex-col justify-between">
        
        <div>
          <h3 className="font-Mont font-[700] text-[16px] leading-[24px] text-white mb-[4px]">
            Flight Details
          </h3>
          <p className="font-Montserrat font-[400] text-[14px] leading-[20px] text-white">
            26.01.2025, 10:50 AM
          </p>
        </div>

        <div className="flex justify-between items-center mt-[12px]">
          
          <div className="text-left">
            <h4 className="font-Montserrat font-[700] text-[16px] leading-[24px] text-white">
              DEL
            </h4>
            <p className="font-Montserrat font-[400] text-[12px] leading-[16px] text-white mt-[2px]">
              Delhi, India
            </p>
          </div>

          <FiArrowRight className="text-white text-[24px]" />

          <div className="text-right">
            <h4 className="font-Montserrat font-[700] text-[16px] leading-[24px] text-white">
              NRT
            </h4>
            <p className="font-Montserrat font-[400] text-[12px] leading-[16px] text-white mt-[2px]">
              Narita, Japan
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FlightDetail;
