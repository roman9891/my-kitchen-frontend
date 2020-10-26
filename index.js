import React from 'react';
import ReactDOM from 'react-dom';
import './src/index.css';
import LoginContainer from "./src/Containers/LoginContainer";
import * as serviceWorker from './src/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <LoginContainer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
