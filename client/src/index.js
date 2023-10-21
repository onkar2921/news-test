import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import NewsContextProvider from './Context/NewsContextProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NewsContextProvider>
    <App />
    </NewsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
