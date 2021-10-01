import React, { useState } from "react";
import { PageWrapper } from "../components";
import { BasicButton } from "../components";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../utils/constantValue";

function Main(props) {
  // check if user logged in
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn && ACCESS_TOKEN && REFRESH_TOKEN) {
    setLoggedIn(true);
  }

  return (
    <PageWrapper>
      <h3>yourwish</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}>
        {!loggedIn && (
          <BasicButton
            do={() => window.location.assign("/login")}
            text='로그인'
          />
        )}
        <BasicButton
          do={() => window.location.assign("/gift")}
          text='선물하기'
        />
      </div>
    </PageWrapper>
  );
}

export default Main;
