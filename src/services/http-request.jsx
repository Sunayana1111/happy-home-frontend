/* eslint-disable no-undef */

import { getCookie } from "../context/setCookie";

const apiUrl = process.env.REACT_APP_BASE_URL;
const loggedInToken = getCookie("token");

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

export const getAllLabServices = async () => {
  return await fetch(`${apiUrl}/core/lab-services/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-CSRFToken": loggedInToken,
      "Content-Type": "application/json",
    },
  });
};

export const getAllCareGivers = async () => {
  return await fetch(`${apiUrl}/core/care-giver/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-CSRFToken": loggedInToken,
      "Content-Type": "application/json",
    },
  });
};
