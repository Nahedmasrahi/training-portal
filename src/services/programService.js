import axiosInstance from "./axiosInstance";


export const getPrograms = async () => {

  const response = await axiosInstance.get(
    "/api/programs"
  );


  console.log("BACKEND:", response.data);


  return response.data;

};