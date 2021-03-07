import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import 'antd/dist/antd.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// BrowserRouter imported here for the reason of animations on pages (did not manage to make them - time constrains)
// ThemeProvider added here, since the App contains the switch
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from './contexts/ThemeContext';

ReactDOM.render
  (
    <React.StrictMode>
      <ThemeProvider>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );

reportWebVitals();
