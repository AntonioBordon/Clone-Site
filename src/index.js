import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './componentes/header';
import Body from './componentes/body';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Body />
  </React.StrictMode>
);

