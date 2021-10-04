import apiUtil from "./apiUtil";

/**
 *
 * @param {number} userId
 */

async function getUserInfo(userId) {
  const params = new URLSearchParams({
    userId: `${userId}`,
  });
  //   console.log(res);
  return apiUtil("GET", "users", params);
}

export default getUserInfo;
