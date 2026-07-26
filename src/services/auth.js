import api from "./api";

// Login User
export const loginUser = async (data) => {
  try {
    const response = await api.post("/auth/login", data);
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Unable to login. Please try again.",
      }
    );
  }
};

// Register User
export const registerUser = async (data) => {
  try {
    const response = await api.post("/auth/register", data);
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Registration failed. Please try again.",
      }
    );
  }
};