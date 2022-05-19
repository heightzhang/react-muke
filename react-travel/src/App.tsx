import React, { useEffect } from 'react';
import styles from './App.module.css'
import { HomePage, DetailPage, RegisterPage, SignInPage, SearchPage, ShoppingCartPage } from "./pages";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Redirect } from 'react-router-dom'
import { useSelector } from './redux/hooks'

import { useDispatch } from 'react-redux';
import { getShoppingCart } from './redux/shoppingCart/slice';

const PrivateRoute = ({ component, isAuthenticated, ...rest }: any) => {
  
  const routeComponent = (props: any) => {
    return isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/signIn" }} />
    );
  }
  return <Route render={routeComponent} {...rest} />;
}



function App() {
  const jwt = useSelector((s) => s.user.token)
  const dispatch = useDispatch()

  useEffect(() => {
    if (jwt) {
      dispatch(getShoppingCart(jwt))
    }
  }, [jwt])

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/signIn" component={SignInPage}></Route>
          <Route path="/register" component={RegisterPage}></Route>
          <Route path="/detail/:touristRouteId" component={DetailPage}></Route>
          <Route path="/search/:keywords?" component={SearchPage} />
          {/* <Route path="/shoppingCart" component={SearchPage} /> */}
          <PrivateRoute
            isAuthenticated={jwt !== null}
            path="/shoppingCart"
            component={ShoppingCartPage}
          />
          <Route render={() => <h1>404 not found 页面去火星了!</h1>}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
