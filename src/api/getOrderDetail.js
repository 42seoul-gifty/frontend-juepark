import apiUtil from "./apiUtil";

/**
 *
 * @param {number} userId
 * @param {number} orderId
 * @returns
 */
async function getOrderDetail(userId, orderId) {
  const params = new URLSearchParams();
  //   console.log(res);
  return apiUtil("GET", `/users/${userId}/orders/${orderId}`, params);
}

export default getOrderDetail;
