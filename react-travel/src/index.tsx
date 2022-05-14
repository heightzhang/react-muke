import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import App from './App';
import "antd/dist/antd.css";
import './i18n/configs';
import { Provider } from "react-redux";
import rootStore from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import axios from "axios";
 

axios.defaults.headers = Object.assign(axios.defaults.headers, {'x-icode': '3BB156B5FBA19F9F'})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={rootStore.store}>
      <PersistGate persistor={rootStore.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

