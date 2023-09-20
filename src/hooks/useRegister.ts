import axios from "axios";
import { TRegisterForm } from "../interface";

export const useRegister = async (registerForm: TRegisterForm) => {
  const data = JSON.stringify({
    email: registerForm?.email,
    password: registerForm?.password,
    fname: registerForm?.fname,
    lname: registerForm?.lname,
  });
  
  const apiUrl = `${import.meta.env.VITE_BASE_URL_WEB_API}/register`;

  const config = {
    method: "post",
    url: apiUrl,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    console.log("register api", response.data);
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error; // Rethrow the error to handle it at a higher level if needed
  }
};
