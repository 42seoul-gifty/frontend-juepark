import apiUtil from "./apiUtil";

async function getAgesRange() {
  const params = new URLSearchParams();
  //   console.log(res);
  return apiUtil("GET", `ages`, params);
}

export default getAgesRange;
