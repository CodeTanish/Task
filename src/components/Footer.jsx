import React from 'react';
import { FiHome, FiSearch, FiPlus, FiHeart, FiUser } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`fixed bottom-0 w-full h-[72px] flex justify-around items-center ${
        isDarkMode ? 'bg-[#333333] text-white' : 'bg-white text-black'
      }`}
    >
      <Link to="/">
        <FiHome size={28} />
      </Link>
      <Link to="/">
        <FiSearch size={28} />
      </Link>
      <Link to="/onboarding">
        <FiPlus size={28} />
      </Link>
      <Link to="/">
        <FiHeart size={28} />
      </Link>
      <Link to="/">
        <FiUser size={28} />
      </Link>
    </div>
  );
};

export default Footer;
