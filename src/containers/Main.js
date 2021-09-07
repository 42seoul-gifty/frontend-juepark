import React from "react";
import { PageWrapper } from "../components";
import { BasicButton } from "../components";

function Main(props) {
  // check if user logged in
  // const login = true;

  // if (login === true) {
  // 	window.location.assign("/gift")
  // } else {
  // 	window.location.assign("/login")
  // }

  return (
    <PageWrapper>
      yourwish
      <div style={{
		  display:"flex",
		  flexDirection:"row"
	  }}>
        <BasicButton
          do={() => window.location.assign("/login")}
          text='로그인'
        />
        <BasicButton
          do={() => window.location.assign("/gift")}
          text='선물하기'
        />
      </div>
    </PageWrapper>
  );
}

export default Main;
