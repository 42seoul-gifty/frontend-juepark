import React from "react";
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';
import Oauth from './components/Oauth'
import Login from './components/Login'
import './App.css';
import { About, History, Present } from "./components";

function App() {
  return (
    <div>
      <Router>
      <div>
        <ul>
          <li><NavLink exact to="/">home</NavLink></li>
          <li><NavLink exact to="/auth">로그인화면</NavLink></li>
          <li><NavLink exact to="/About"><About /></NavLink></li>
          <li><NavLink exact to="/History"><History /></NavLink></li>
          <li><NavLink exact to="/Present"><Present /></NavLink></li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/auth"><Oauth /></Route>
        <Route exact path="/About"><About /></Route>
        <Route exact path="/History"><History /></Route>
        <Route exact path="/Present"><Present /></Route>
        <Route exact path="/oauth/callback/kakao"><Login /></Route>
      </Switch>
      </Router>

    </div>
  );
}

export default App;
