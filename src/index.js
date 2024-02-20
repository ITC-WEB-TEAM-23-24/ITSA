import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/mainlayout';
import SOS from './Pages/sos';
import KSP from './Pages/ksp';
import ITSP from './Pages/itsp';

ReactDOM.render(
  <React.StrictMode>
    <MainLayout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sos" element={<SOS />} />
          <Route path="/ksp" element={<KSP />} />
          <Route path="/itsp" element={<ITSP />} />
        </Routes>
      </Router>
    </MainLayout>
  </React.StrictMode>,
  document.getElementById('root')
);
