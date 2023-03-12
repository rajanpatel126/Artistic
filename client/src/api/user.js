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

//verifyUser connection
export const verifyUser = async (userInfo) => {
  try {
    const data = await client.post("/user/signinUser", userInfo);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

//delete user connection
export const deleteUser = async (userId) => {
  try {
    const { message } = await client.delete(`/auth/deleteUser/${userId}`);
    return message;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

//getting all users
export const getAllUsers = async () => {
  try {
    const { data } = await client.get("/auth/getUsers");
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

//update user
export const updateUser = async (userId, userInfo) => {
  console.log("userInfo" + userInfo);
  try {
    const data = await client.put(`/auth/updateUser/${userId}`, userInfo);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const getImage = async (prodId) => {
  try {
    const { data } = await client.get(`/auth/getImage/${prodId}`);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};
