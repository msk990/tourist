import React from 'react';
import logo from './logo.svg';

import './App.css';
import { Button } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { Timeline } from './app/features/timeline/Timeline';
import { MenuItem } from './app/features/menu-item/MenuItem';
import { MenuMap } from './app/features/menu-item/menu-map/MenuMap';

import { MenuReviews } from './app/features/menu-item/menu-reviews/MenuReviews';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Timeline />}/>

      <Route path="menu" element={<MenuItem />}>
            <Route path="map" element={<MenuMap />}/>  
            <Route path="reviews" element={<MenuReviews />}/> 
          
      </Route>
    </Routes>
    </>
  )
}

export default App;
