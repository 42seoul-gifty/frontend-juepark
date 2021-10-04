import { ACCESS_TOKEN, SERVER_URI } from "../utils/constantValue";

/**
 *
 * @param {number} price
 * @param {number} gender
 * @param {number} age
 */
async function getGiftList(price, gender, age) {
  const QUERY_STR = `?price=${price}&gender=${gender}&age=${age}`;
  const res = await fetch(`${SERVER_URI}/products${QUERY_STR}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });
  //   console.log(res);
  return res.json();
}

export default getGiftList;
