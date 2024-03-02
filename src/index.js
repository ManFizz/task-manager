import React from 'react';
import ReactDOM from 'react-dom/client';
import AppInitializers from './js/Components/AppInitializers';

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.esm.js.map";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppInitializers />
  </React.StrictMode>
);
