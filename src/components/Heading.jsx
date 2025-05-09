import React from 'react';

const Heading = (props) => {
  return (
    <div className='flex flex-row items-center justify-between ml-[20px] mr-[20px] mt-[32px]'>
      <h3 className='font-[Mont] font-[700] text-[18px] leading-[24px]'>
        {props.title}
      </h3>
      <p className='font-[Mont] font-[800] text-[10px] leading-[16px] text-[#3643FB ] underline decoration-solid decoration-0 text-decoration-skip-ink-auto cursor-pointer dark:text-[#D3F462]'>
        See All
      </p>
    </div>
  );
};

export default Heading;
