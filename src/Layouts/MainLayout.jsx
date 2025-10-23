// src/Layouts/MainLayout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {
  return (
    <div className='h-screen flex flex-col'>
      <Navbar />
      <div className='flex-1 bg-gradient-to-t from-[#cd9cf280] to-[#f6f3ff] '> 
        <Outlet /> 
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;