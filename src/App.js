import React from "react";
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';
import Oauth from './components/Oauth'
import Login from './components/Login'
import KakaoLogin from './components/KakaoLogin'
import './App.css';
//import { About, History, Present } from "./components";

function App() {
  return (
    <div>
      <Router>
      <div>
        <ul>
          <li><NavLink exact to="/">Oauth</NavLink></li>
          <li><NavLink exact to="/oauth/callback/kakao">Login</NavLink></li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/"><Oauth /></Route>
        {/* <Route exact path="/"><About /></Route>
        <Route exact path="/"><History /></Route>
        <Route exact path="/"><Present /></Route> */}
        <Route exact path="/oauth/callback/kakao"><Login /></Route>
        <Route exact path="/KakaoLogin"><KakaoLogin /></Route>
      </Switch>
      </Router>

    </div>
  );
}

export default App;
