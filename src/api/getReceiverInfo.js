import apiUtil from "./apiUtil";

/**
 *
 * @param {number} receiverId
 */
async function getReceiverInfo(receiverId) {
  const params = new URLSearchParams();
  //   console.log(res);
  return apiUtil("GET", `receiver/${receiverId}`, params);
}

export default getReceiverInfo;
