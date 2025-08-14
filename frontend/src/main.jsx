import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Global error handler for unhandled promise rejections
window.addEventListener('unhandledrejection', function(event) {
  // Check if it's an AbortError
  if (event.reason && event.reason.name === 'AbortError') {
    console.log('Aborted request - this is normal behavior');
    event.preventDefault(); // Prevent the error from showing in console
    return;
  }
  
  // Log other errors normally
  console.error('Unhandled promise rejection:', event.reason);
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
