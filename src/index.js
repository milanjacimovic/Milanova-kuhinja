import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './i18next'

ReactDOM.render(
  <Suspense fallback={(<div>Loading ~~~</div>)}><React.StrictMode>
    <App />
  </React.StrictMode></Suspense >
  ,
  document.getElementById('root')
);
