import React from 'react';
import Button from '../components/Button';
import { FiMapPin, FiCalendar, FiChevronDown } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme';

const Onboarding = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`flex flex-col w-full max-w-[400px] h-auto mx-auto mt-10 rounded-lg p-6 gap-6 ${
        isDarkMode ? 'bg-black text-[#F5F5F5]' : 'bg-white text-black'
      }`}
    >
      <div className="w-full text-center mb-2">
        <h2 className="font-Mont text-[21px] font-extrabold leading-8">
          Plan Your Journey, Your Way!
        </h2>
        <p className="font-Montserrat text-sm font-normal leading-5 mt-2">
          Let’s create your personalised travel experience
        </p>
      </div>

      <div className="w-full flex flex-col gap-2">
        <h3 className="font-Mont font-bold text-base">
          Where would you like to go?
        </h3>
        <div className="relative w-full">
          <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Enter Destination"
            className={`w-full pl-10 pr-3 py-2 rounded-lg font-Montserrat text-sm transition duration-200 ${
              isDarkMode
                ? 'bg-[#333333] border-none text-[#F5F5F5] placeholder-text-[#F5F5F5]'
                : 'bg-white border border-gray-300 placeholder-text-500'
            }`}
          />
        </div>
      </div>

      <div className="w-full flex flex-col gap-2">
        <h3 className="font-Mont font-bold text-base">
          How long will you stay?
        </h3>
        <div className="relative w-full">
          <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="date"
            style={{
              WebkitAppearance: 'none',
              MozAppearance: 'textfield',
              appearance: 'none',
            }}
            className={`w-full pl-10 pr-10 py-2 rounded-lg font-Montserrat text-sm transition duration-200 ${
              isDarkMode
                ? 'bg-[#333333] border-none text-[#F5F5F5] placeholder-[#f5f5f5]'
                : 'bg-white border text-[#F5F5F5] placeholder-[#f5f5f5]'
            }`}
          />
        </div>
      </div>

      <div className="w-full flex flex-col gap-2">
        <h3 className="font-Mont font-bold text-base mb-2">
          Who are you traveling with?
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <Button label="Solo" />
          <Button label="Couple" />
          <Button label="Family" />
          <Button label="Friends" />
        </div>
      </div>

      <div className="flex items-center justify-center mt-[215.3px] mb-4">
        <button
          className="w-full max-w-[353px] h-[44px] bg-blue-500 text-[#F5F5F5] rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
