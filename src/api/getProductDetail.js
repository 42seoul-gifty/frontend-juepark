import apiUtil from "./apiUtil";

/**
 *
 * @param {number} productCode
 */
async function getProductDetail(productCode) {
  const params = new URLSearchParams();
  //   console.log(res);
  return apiUtil("GET", `products/${productCode}`, params);
}

export default getProductDetail;
