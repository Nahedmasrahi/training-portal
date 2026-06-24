import axiosInstance from "./axiosInstance";


export const registerUser = async (data) => {

  try {

    const response =
      await axiosInstance.post(
        "/api/register",
        data
      );

    return response.data;

  } catch (error) {

  console.log(error);

  console.log(error.response);

  console.log(error.response?.data);

  const message =
    error?.response?.data?.message ||
    "تعذر الاتصال بالسيرفر";

  throw new Error(message);

}

};


export const loginUser = async (
  email,
  password
) => {

  try {

    const response =
      await axiosInstance.post(
        "/api/login",
        {
          email,
          password,
        }
      );

    localStorage.setItem(
      "token",
      response.data.access_token
    );

    localStorage.setItem(
      "user",
      JSON.stringify(response.data.user)
    );

    return response.data;

  } catch (error) {

    const message =
      error?.response?.data?.message ||
      "تعذر الاتصال بالسيرفر";

    throw new Error(message);

  }

};


export const logoutUser = () => {

  localStorage.removeItem("token");
  localStorage.removeItem("user");

};