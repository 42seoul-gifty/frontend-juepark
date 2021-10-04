import apiUtil from "./apiUtil";

async function getPricesRange() {
  const params = new URLSearchParams();
  //   console.log(res);
  return apiUtil("GET", `prices`, params);
}

export default getPricesRange;
