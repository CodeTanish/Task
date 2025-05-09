import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import MainDashboard from './pages/MainDashboard';
import Footer from './components/Footer';
import Onboarding from './pages/Onboarding';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="pb-[72px]">
          <Routes>
            <Route path="/" element={<MainDashboard />} />
            <Route path="/onboarding" element={<Onboarding />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
