import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import for React 18
import App from './App';
import './styles.css';

// Create a root and render the app
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);