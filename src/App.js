import React from 'react';

import { Router, Route, Switch } from "react-router-dom";

import indexRoutes from "routes/index.jsx";

// import Home from './pages/home';
// import Login from './pages/LoginPage';
// import Register from './pages/register'
// import Verification from './pages/verification';
// import RouteWithSubRoutes from './components/RouteWithSubRoutes';
// import {AppMain} from "./styles/app";
 
const App = () => (
  <div>
    {/* <Header/> */}
      {/* <BodyPageStyled> */}
      <Switch>
        {/* {
          pageList.map(({ exact, ...item }) => (
            <RouteWithSubRoutes key={item.path} exact={true} {...item} />
          ))
        } */}
        {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
      </Switch>
      {/* </BodyPageStyled> */}
    {/* <Footer /> */}
    {/* <Alert stack={{limit: 3}} effect="jelly"/> */}
  </div>
);
export default App;
