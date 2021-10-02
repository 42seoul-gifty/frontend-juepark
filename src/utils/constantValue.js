export const ACCESS_TOKEN = localStorage.getItem("access_token");
export const REFRESH_TOKEN = localStorage.getItem("refresh_token");
export const SERVER_URI = "http://yekim.gifty4u.com";
export const CLIENT_ID = "1ba26f09773c4e4473835dabe091a18a";
export const REDIRECT_URI = "http://localhost:3000/callback/kakao";
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
