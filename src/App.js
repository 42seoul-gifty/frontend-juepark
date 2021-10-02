import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import KakaoCallback from "./containers/KakaoCallback";
import { Gift, Main } from "./containers";
import Login from "./containers/Login";
import GiftContainer from "./redux/containers/GiftContainer";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/callback/kakao'>
            <KakaoCallback />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/gift'>
            {/* <GiftContainer /> */}
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
