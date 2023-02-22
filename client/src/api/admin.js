import client from "./client";

//add user connection
export const addUser = async (userInfo) => {
  try {
    const data = await client.post("/auth/createUser", userInfo);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

//
export const forgetPassword = async (obj, config) => {
  try {
    const data = await client.post("/user/forgetPassword", obj, config);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};
