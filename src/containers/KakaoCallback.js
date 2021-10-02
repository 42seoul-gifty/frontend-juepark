import React from "react";
import { SERVER_URI } from "../utils/constantValue";

function KakaoCallback(props) {
  let code = "";

  async function getResult() {
    // 수정 필요(주소)
    const fetchedData = await fetch(`${SERVER_URI}/login/kakao`, {
      method: "GET",
      headers: {
        "Authorization-Code": code,
      },
    })
      .then(async (res) => {
        const result = await res.json();
        const ACCESS_TOKEN = result.data.access_token;
        const REFRESH_TOKEN = result.data.refresh_token;
        //로컬에 저장함(약속된 사항)
        console.log("result:");
        console.log(result);
        console.log("ACCESS_TOKEN renew:");
        console.log(ACCESS_TOKEN);
        localStorage.setItem("access_token", ACCESS_TOKEN);
        localStorage.setItem("refresh_token", REFRESH_TOKEN);
        window.location.assign("/");
        return result;
        // history.goBack();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => console.log("error"))
      .finally(() => {
        // history.goBack();
        window.location.assign("/");
      });
    console.log(fetchedData);
  }

  try {
    code = new URL(window.location.href).searchParams.get("code");
    if (code !== "") {
      console.log("get code success");
      console.log(code);
      //getResult();
    } else {
      console.log("get code failure");
      window.location.assign("/");
    }
  } catch (error) {
    console.log(error);
  }

  return (
    <div>
      <p>Login redirect uri</p>
    </div>
  );
}

export default KakaoCallback;
