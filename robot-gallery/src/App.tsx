import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";
import styles from "./App.module.css";


function App() {
  return (
    <div className={styles.app}>
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