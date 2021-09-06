import React from "react";
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import KakaoCallback from './containers/KakaoCallback'
import { Gift, Main } from "./containers";
import Login  from "./containers/Login";

function App() {
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path="/login/kakao"><KakaoCallback /></Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/gift/info_sender"><Gift /></Route>
        <Route exact path="/gift/info_receiver"><Gift /></Route>
        <Route exact path="/gift/info_gift"><Gift /></Route>
        <Route exact path="/gift/confirm"><Gift /></Route>
        <Route exact path="/gift/finish"><Gift /></Route>
        <Route exact path="/gift"><Gift /></Route>
        <Route exact path="/"><Main /></Route>
      </Switch>
      </Router>

    </div>
  );
}

export default App;
