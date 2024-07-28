import React from 'react';
import Navbar from './Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';
import Background from './Background'; // Import Background component

export default function Layout() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Background /> {/* Add Background component here */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <div style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
