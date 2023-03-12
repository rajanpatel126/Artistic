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

export const addProductDetails = async ( object, config) => {
  try {
    const { data } = await client.put(
      "/admin/addProductDetails/",
      object,
      config
    );
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

//forget passweord
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

//reset password
export const resetPassword = async (obj, config) => {
  try {
    const { data } = await client.put("/user/resetPassword", obj, config);
    console.log(data);
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};
