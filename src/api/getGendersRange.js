import apiUtil from "./apiUtil";

async function getGendersRange() {
  const params = new URLSearchParams();
  //   console.log(res);
  return apiUtil("GET", `genders`, params);
}

export default getGendersRange;
