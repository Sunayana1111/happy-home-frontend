import api from "./api";

export const loginUser = async (payload) => {
  const response = await api.post(`/account/login`, { body: payload });
  return response;
};

export const registerUser = async (payload) => {
  const body = {
    email: "string",
    username: "string",
    first_name: "string",
    last_name: "string",
    password: "string",
    password2: "string",
    gender: "string",
    age: 0,
    phone: "string",
    address: "string",
  };
  console.log(payload, "payload data");
  const response = await api.post(`/account/register`, { body });
  debugger;
  return response;
};
