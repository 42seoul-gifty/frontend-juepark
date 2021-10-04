import { ENDPOINT } from "../utils/constantValue";

/**
 *
 * @param {string} code
 */
export async function apiKakaoLogin(code) {
  const res = await fetch(`${ENDPOINT}/login/kakao`, {
    method: "GET",
    headers: {
      "Authorization-Code": code,
    },
  });
  const result = await res.json();
  const ACCESS_TOKEN = result.data.access_token;
  const REFRESH_TOKEN = result.data.refresh_token;
  localStorage.setItem("access_token", ACCESS_TOKEN);
  localStorage.setItem("refresh_token", REFRESH_TOKEN);
  window.location.assign("/");
}
