import React from 'react';
import styles from './App.module.css'
import { HomePage, DetailPage, RegisterPage, SignInPage, SearchPage } from "./pages";
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/signIn" component={SignInPage}></Route>
          <Route path="/register" component={RegisterPage}></Route>
          <Route path="/detail/:touristRouteId" component={DetailPage}></Route>
          <Route path="/search/:keywords?" component={SearchPage} />

          <Route render={() => <h1>404 not found 页面去火星了!</h1>}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
