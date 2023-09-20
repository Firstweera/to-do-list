import axios from "axios";
import { TLoginForm } from "../interface";

export const useLogin = async (loginForm: TLoginForm) => {
  let data = JSON.stringify({
    email: loginForm?.email,
    password: loginForm?.password,
  });

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BASE_URL_WEB_API}/login`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    console.log("login api", response.data);
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error; // Rethrow the error to handle it at a higher level if needed
  }
};
