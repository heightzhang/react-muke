import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import App from './App';
import "antd/dist/antd.css";
import './i18n/configs';
import { Provider } from "react-redux";
import store from "./redux/store";
import axios from "axios";
 
axios.defaults.headers = Object.assign(axios.defaults.headers, {'x-icode': '10F159C7B862011C'})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

