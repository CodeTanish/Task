import React from 'react';
import { AiOutlineHome, AiOutlineSearch, AiOutlinePlus, AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';

const Icons = ({ icon }) => {
  const renderIcon = () => {
    switch (icon) {
      case 'home':
        return <AiOutlineHome size={28} />;
      case 'search':
        return <AiOutlineSearch size={28} />;
      case 'plus':
        return <AiOutlinePlus className='text-[#313DDF]' size={28} />;
      case 'favorite':
        return <AiOutlineHeart size={28} />;
      case 'user':
        return <AiOutlineUser size={28} />;
      default:
        return null;
    }
  };

  return (
    <div className=''>
      {renderIcon()}
    </div>
  );
};

export default Icons;
