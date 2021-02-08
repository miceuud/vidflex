import axios from "axios";

export default () => {
  return axios.create({
    baseURL: `http://localhost:8800/`,
    headers: { "Content-Type": "application/json" },
  });
};
