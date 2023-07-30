/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import { Phones } from './Pages/Phones/Phones';
import { Home } from './Pages/Home/Home';

export const App: React.FC = () => (
  <div className={'section'}>
    {/* <Header /> */}
    <div className="container">
      <Routes>
        {/* <Route path="*" element={<PageNotFound />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/phones" element={<Phones />} />
      </Routes>
    </div>
    {/* <Footer /> */}
  </div>
);