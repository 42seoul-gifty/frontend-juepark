import React from "react";
import { apiKakaoLogin } from "../api/apiLogin";
// import { ENDPOINT } from "../utils/constantValue";

// api 바꾼거 테스트 필요
function KakaoCallback(props) {
  let code = "";

  // async function getResult() {
  //   const fetchedData = await fetch(`${ENDPOINT}/login/kakao`, {
  //     method: "GET",
  //     headers: {
  //       "Authorization-Code": code,
  //     },
  //   })
  //     .then(async (res) => {
  //       const result = await res.json();
  //       const ACCESS_TOKEN = result.data.access_token;
  //       const REFRESH_TOKEN = result.data.refresh_token;
  //       localStorage.setItem("access_token", ACCESS_TOKEN);
  //       localStorage.setItem("refresh_token", REFRESH_TOKEN);
  //       window.location.assign("/");
  //       return result;
  //     })
  //     .then((data) => {
  //       return data;
  //     })
  //     .catch((error) => console.log("error"))
  //     .finally(() => {
  //       window.location.assign("/");
  //     });
  // }

  code = new URL(window.location.href).searchParams.get("code");
  console.log(`code: ${code}`);
  apiKakaoLogin(code);
  console.log("로그인에 실패했습니다.");
  window.location.assign("/login");

  return (
    <div>
      <p>Kakao Login callback page</p>
    </div>
  );
}

export default KakaoCallback;
