import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Gift, Main, KakaoCallback, NaverCallback } from "./containers";
import Login from "./containers/Login";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/callback/kakao'>
            <KakaoCallback />
          </Route>
          <Route exact path='/callback/naver'>
            <NaverCallback />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/gift'>
            <Gift />
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
