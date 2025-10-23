// src/Layouts/MainLayout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {
  return (
    <div className='h-screen flex flex-col'>
      <Navbar />
      <div className='flex-1 bg-blue-50 '> 
        <Outlet /> 
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;