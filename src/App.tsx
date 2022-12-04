import React from 'react';
import logo from './logo.svg';

import './App.css';
import { Button } from 'react-bootstrap';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Timeline } from './app/features/timeline/Timeline';
import { MenuItem } from './app/features/menu-item/MenuItem';
import { MenuMap } from './app/features/menu-item/menu-map/MenuMap';

import { MenuReviews } from './app/features/menu-item/menu-reviews/MenuReviews';
import { GreenPractices } from './app/features/menu-item/green-practices/GreenPractices';
import IngRestMap from './app/features/menu-item/ing-rest-map/IngRestMap';
import { MenuItemContainer } from './app/features/menu-item/MenuItemContainer';
import { MenuIngredient } from './app/features/menu-item/menu-ingredient/MenuIngredient';
import { HomeComponent } from './app/features/home/HomeComponent';
import { HomeMap } from './app/features/home/home-map/HomeMap';
import { HomeEvents } from './app/features/home/home-events/HomeEvents';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomeComponent />}> 
        <Route path="map" element={<HomeMap />}/>
        <Route path="events" element={<HomeEvents />}/>
      </Route>

      <Route path="menu" element={<MenuItemContainer />}>
      <Route index element={<Navigate replace to="item/map" />} />
          <Route path="item" element={<MenuItem />}>
              <Route path="map" element={<MenuMap />}/>  
              <Route path="reviews" element={<MenuReviews />}/> 
             
          </Route>
            
          <Route path="ingredient" element={<MenuIngredient />} >
          <Route index element={<Navigate replace to="green" />} />
          <Route path="green" element={<GreenPractices />}/>
            <Route path="timeline" element={<Timeline />}/>
            <Route path="find" element={<IngRestMap />}/>
          </Route>
      </Route>
    </Routes>
    </>
  )
}

export default App;
