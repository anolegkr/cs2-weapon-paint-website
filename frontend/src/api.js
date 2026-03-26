import axios from "axios";

const API_URL = "http://localhost:8000";

export async function getSkins() {
  const res = await axios.get(`${API_URL}/skins`);
  return res.data;
}

export async function buySkin(user_id, skin_id) {
  const res = await axios.post(`${API_URL}/buy`, { user_id, skin_id });
  return res.data;
}

export async function deposit(user_id, amount) {
  const res = await axios.post(`${API_URL}/deposit`, { user_id, amount });
  return res.data;
}
