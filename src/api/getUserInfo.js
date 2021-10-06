import apiUtil from "./apiUtil";

/**
 *
 * @param {number} userId
 */

async function getUserInfo(userId) {
  const params = new URLSearchParams();
  //   console.log(res);
  return apiUtil("GET", `users/${userId}`, params);
}

export default getUserInfo;
