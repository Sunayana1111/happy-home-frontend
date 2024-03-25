import api from "./api";

export const loginUser = async () => {
  const body = {
    username: "admin2",
    password: "password123",
  };
  const response = await api.post(`/auth/login`, { body });
  debugger
  return response;
};
