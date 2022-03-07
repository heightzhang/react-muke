import React from 'react';
import styles from './App.module.css'
import { HomePage } from "./pages";
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/signIn" render={() => <h1>登陆页面</h1>}></Route>
          <Route render={() => <h1>404 not found 页面去火星了</h1>}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
