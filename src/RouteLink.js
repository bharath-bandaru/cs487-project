import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import Health from './pages/Health';
import Jobs from './pages/Jobs';
import Collaborate from './pages/Collaborate';
import Calendar from './pages/Calendar';

const RouteLink = () => {
  return (
    <Routes> 
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/home' element={<HomePage/>}></Route>
    </Routes>
  );
}

export default RouteLink;