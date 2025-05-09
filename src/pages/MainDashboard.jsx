import React from 'react';
import UserDetail from '../components/UserDetail';
import HeroCard from '../components/HeroCard';
import FlightDetail from '../components/FlightDetail';
import Accomadation from '../components/Accomadation';
import Activity from '../components/Activity';
import Tourist from '../components/Tourist';
import { useTheme } from '../hooks/useTheme';

const MainDashboard = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={isDarkMode ? 'bg-[#1a1a1a] text-white' : 'bg-[#f9f9f9] text-black'}>
      <UserDetail />
      <HeroCard />
      <FlightDetail />
      <Accomadation />
      <Activity />
      <Tourist />
    </div>
  );
};

export default MainDashboard;
