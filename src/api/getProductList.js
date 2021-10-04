import apiUtil from "./apiUtil";

/**
 *
 * @param {number} price
 * @param {number} gender
 * @param {number} age
 */
async function getProductList(price, gender, age) {
  const params = new URLSearchParams({
    price: `${price}`,
    gender: `${gender}`,
    age: `${age}`,
  });
  //   console.log(res);
  return apiUtil("GET", "products", params);
}

export default getProductList;
