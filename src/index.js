import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Import the main CSS file

// Create a root to render the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped in React.StrictMode for development checks
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
