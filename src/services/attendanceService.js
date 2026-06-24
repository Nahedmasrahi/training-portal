export const getAttendance = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axiosInstance.get(
      "/api/attendance/history",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }
    );

    console.log("FULL RESPONSE:", response.data);

    return response.data;
  } catch (error) {
    console.log("ERROR:", error.response?.data || error.message);
    throw error;
  }
};