import { ENDPOINT } from "../utils/constantValue";
/**
 *
 * @param {string} imp_uid
 * @param {string} merchant_uid
 */
async function apiPay(imp_uid, merchant_uid) {
  const data = {
    merchant_uid: merchant_uid,
    imp_uid: imp_uid,
  };
  const res = await fetch(`${ENDPOINT}/payment/validation`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await res.json();
}

export default apiPay;
