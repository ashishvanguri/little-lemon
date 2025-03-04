import React from 'react';
import Nav from './components/Nav';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './components/MainPage';
import BookingForm from './components/BookingForm'

import MenuPage from './components/MenuPage';
import ReserveNow from './components/ReserveNow';
function App() {
  return (
 
<Router>
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/reserve" element={<ReserveNow />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
