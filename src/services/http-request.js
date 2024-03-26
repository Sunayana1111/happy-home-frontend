/* eslint-disable no-undef */

const apiUrl = process.env.REACT_APP_BASE_URL;

export const loginUser = async (body) => {
  return await fetch(`${apiUrl}/account/login/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const registerUser = async (body) => {
  return await fetch(`${apiUrl}/account/register/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
