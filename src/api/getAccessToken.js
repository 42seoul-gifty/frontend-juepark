import { ENDPOINT, REFRESH_TOKEN } from "../utils/constantValue";

async function getAccessToken() {
  const res = await fetch(`${ENDPOINT}/token/refresh`, {
    method: "GET",
    headers: {
      refresh_token: `Bearer ${REFRESH_TOKEN}`,
    },
  });
  const result = await res.json();
  // console.log("result:");
  // console.log(result);
  const ACCESS_TOKEN = result.data.access_token;
  // console.log("ACCESS_TOKEN renew:");
  // console.log(ACCESS_TOKEN);
  localStorage.setItem("access_token", ACCESS_TOKEN);
  window.location.assign("/");
}

export default getAccessToken;
