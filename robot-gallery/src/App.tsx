import React from 'react';
import logo from './assets/images/logo.svg'
// import './App.css';
import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import styles from "./App.module.css";
import ShoppingCart from './components/ShoppingCart'


function App() {
  return (
    <div className={styles.app}>
      {/*  */}
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo"></img>
        <h1>标题要长</h1>
      </div>

      {/*  */}
      <ShoppingCart></ShoppingCart>

      {/*  */}
      <div className={styles.robotList}>
        <div className={styles.robotList}>
          {robots.map((r) => (
            <Robot id={r.id} email={r.email} name={r.name}></Robot>
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;
