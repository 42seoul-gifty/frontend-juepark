import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import KakaoCallback from "./containers/KakaoCallback";
import { Main } from "./containers";
import Login from "./containers/Login";
import GiftContainer from "./Redux/containers/GiftContainer";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/login/kakao'>
            <KakaoCallback />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/gift'>
            <GiftContainer />
          </Route>
          <Route exact path='/'>
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
