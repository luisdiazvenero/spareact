import React from 'react';

import {
  BrowserRouter as ReactRouter,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import App from './App';

const userSignedIn = true;
export default class Router extends React.Component{



  signedInRoutes(){
    if(true){
      return(
        <Route path="/new" render={()=><h1>Orale</h1>} />
      )
    }
  }

  home(){
    if(userSignedIn) return Dashboard;

    return Home;
  }

  render(){
    return(
      <ReactRouter>
        <App>
          <Route exact path="/" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Login}></Route>
          {this.signedInRoutes()}
        </App>
      </ReactRouter>
    );

  }
}
