import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import OrderDetails from './components/OrderDetails';
import CommunicationSearch from './components/CommunicationSearch';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 d-flex flex-column" style={{ height: '100vh', overflow: 'hidden' }}>
          <Header />
          <div className="flex-grow-1 overflow-auto bg-light">
            <Routes>
              <Route path="/" element={<OrderDetails />} />
              <Route path="/communication-search" element={<CommunicationSearch />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
