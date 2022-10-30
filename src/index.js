import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './components/Header'
import Main from './components/Main'
import Reservation from './components/Reservation'
import Footer from './components/Footer'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Reservation />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
