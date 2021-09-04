import React from "react";
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Login from './containers/Login'
import KakaoCallback from './containers/KakaoCallback'
import './App.css';
import { Gift, Main } from "./containers";

function App() {
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path="/"><Main /></Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/login/kakao"><KakaoCallback /></Route>
        <Route exact path="/gift"><Gift /></Route>
      </Switch>
      </Router>

    </div>
  );
}

export default App;
