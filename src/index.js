import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Echo from 'laravel-echo';

import Pusher from 'pusher-js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


window.Pusher = Pusher;

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: 'c2125739f0d66b777906',
  cluster: 'mt1',
  authEndpoint: "http://35.173.50.140/broadcasting/auth",
  // authEndpoint: "http://127.0.0.1:8000/broadcasting/auth",
  forceTLS: false,
  disableStats: true,
  wsHost: '35.173.50.140',
  // wsHost: window.location.hostname,
  wsPort: 6001,
  auth: {
    headers: {
      Authorization: 'Bearer 3|xzNRSAlNDFlzulZFeInVHqKnTPPzHqm5t7WrMHA7d2e34c0d'
    },
  },
});


console.log(window.location.hostname);

