import React, { useState } from "react";
import getAgesRange from "../api/getAgesRange";
import getGendersRange from "../api/getGendersRange";
import getPricesRange from "../api/getPricesRange";
import getAccessToken from "../api/getAccessToken";
import { PageWrapper } from "../components";
import { BasicButton } from "../components";
import { ACCESS_TOKEN, REFRESH_TOKEN, ENDPOINT } from "../utils/constantValue";

function Main(props) {
  // check if user logged in
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn === false && ACCESS_TOKEN && REFRESH_TOKEN) {
    setLoggedIn(true);
  } else if (loggedIn === false && REFRESH_TOKEN) {
    console.log("renew AccessToken");
    getAccessToken(); //잘되는지 테스트 필요
  }

  // async function getUserDetail() {
  //   const fetchedData = await fetch(`${ENDPOINT}/users/${userId}`, {
  //     method: "GET",
  //     headers: {
  //       AccessToken: ACCESS_TOKEN,
  //       RefreshToken: REFRESH_TOKEN,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       return data;
  //     })
  //     .catch((error) => console.log("error"));
  //   giftList = fetchedData;
  //   console.log(JSON.stringify(giftList));
  //   onIncrease();
  // }

  //테스트필요

  const ageRange = getAgesRange();
  console.log("ageRange");

  const genderRange = getGendersRange();
  console.log("genderRange");

  const priceRange = getPricesRange();
  console.log("priceRange");

  // 테스트필요(파일분리)
  // async function renewAccessToken() {
  //   const fetchedData = await fetch(`${ENDPOINT}/token/refresh`, {
  //     method: "GET",
  //     headers: {
  //       refresh_token: `Bearer ${REFRESH_TOKEN}`,
  //     },
  //   })
  //     .then(async (res) => {
  //       const result = await res.json();
  //       console.log("result:");
  //       console.log(result);
  //       const ACCESS_TOKEN = result.data.access_token;
  //       console.log("ACCESS_TOKEN renew:");
  //       console.log(ACCESS_TOKEN);
  //       //로컬에 저장함(약속된 사항)
  //       localStorage.setItem("access_token", ACCESS_TOKEN);
  //       window.location.assign("/");
  //       // history.goBack();
  //     })
  //     .then((data) => {
  //       return data;
  //     })
  //     .catch((error) => console.log("error"));
  //   console.log(JSON.stringify(fetchedData));
  // }

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
