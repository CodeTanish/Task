import React from 'react';
import { FiUser, FiUsers, FiHeart, FiSmile } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme';

const iconMap = {
  Solo: <FiUser className="text-xl" />,
  Couple: <FiHeart className="text-xl" />,
  Family: <FiUsers className="text-xl" />,
  Friends: <FiSmile className="text-xl" />,
};

const Button = ({ label = "Button", variant = "default" }) => {
  const { isDarkMode } = useTheme();

  const baseStyles = `w-[160px] h-[50px] flex flex-row items-center justify-center rounded-lg text-sm font-medium transition duration-200 cursor-pointer gap-2`;

  const primaryStyles = isDarkMode
    ? `bg-[#333333] text-[#F5F5F5] border border-[#555555]`
    : `bg-blue-500 text-[#F5F5F5] `;

  const defaultStyles = isDarkMode
    ? `bg-[#333333] text-[#F5F5F5] border border-[#555555]`
    : `bg-white text-gray-700 hover:bg-gray-100 border border-gray-300`;

  return (
    <div className={`${baseStyles} ${variant === 'primary' ? primaryStyles : defaultStyles}`}>
      {iconMap[label]}
      <span>{label}</span>
    </div>
  );
};

export default Button;
