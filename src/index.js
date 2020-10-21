import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import LoginContainer from "./Containers/LoginContainer";
import * as serviceWorker from './serviceWorker';

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

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
