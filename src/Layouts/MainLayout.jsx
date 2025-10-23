// src/Layouts/MainLayout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className='min-h-[calc(100vh-200px)]'> 
        <Outlet /> 
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;