import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DarkModeProvider } from './Darkmode';
// import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



