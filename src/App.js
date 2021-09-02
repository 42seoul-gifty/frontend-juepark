import React from "react";
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';
import Login from './components/Login'
import KakaoCallback from './components/KakaoCallback'
import './App.css';
import { About, History, Present } from "./components";

function App() {
  return (
    <div>
      <Router>
      <div>
        <ul>
          <li><NavLink exact to="/">home</NavLink></li>
          <li><NavLink exact to="/login">로그인화면</NavLink></li>
          <li><NavLink exact to="/about"><About /></NavLink></li>
          <li><NavLink exact to="/history"><History /></NavLink></li>
          <li><NavLink exact to="/present"><Present /></NavLink></li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/history"><History /></Route>
        <Route exact path="/present"><Present /></Route>
        <Route exact path="/login/kakao"><KakaoCallback /></Route>
      </Switch>
      </Router>

    </div>
  );
}

export default App;
