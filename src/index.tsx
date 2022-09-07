import App from 'App';
import Card from 'components/Card';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import './index.css';



ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Card />
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);

