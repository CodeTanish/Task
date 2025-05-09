import React from 'react';
import AccomadationCard from './AccomadationCard';
import Heading from './Heading';

const Accomadation = () => {
  return (
    <>
      <Heading title={'Accomadation'} />
      <div className="flex overflow-x-auto gap-4 scrollbar-hide ml-[20px] mt-[16px] pr-[20px]">
        <AccomadationCard />
        <AccomadationCard />
        <AccomadationCard />
        <AccomadationCard />
        <AccomadationCard />
      </div>
    </>
  );
};

export default Accomadation;
