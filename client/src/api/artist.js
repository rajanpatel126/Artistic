import client from "./client";

//add artist
export const addArtist = async (ArtistInfo) => {
  try {
    const data = await client.post("/auth/createArtist", ArtistInfo);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

//verify Artist connection
export const verifyArtist = async (ArtistInfo) => {
  try {
    const data = await client.post("/auth/signinArtist", ArtistInfo);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

//delete artist connection
export const deleteArtist = async (ArtistId) => {
  try {
    const { message } = await client.delete(`/auth/deleteArtist/${ArtistId}`);
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
export const getArtist = async (ArtistId) => {
  try {
    const { data } = await client.get(`/auth/findArtist/${ArtistId}`);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

//update Artist
export const updateArtist = async (ArtistId, ArtistInfo) => {
  console.log("ArtistInfo" + ArtistInfo);
  try {
    const data = await client.put(`/auth/updateArtist/${ArtistId}`, ArtistInfo);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

//add design detail
export const addDesignDetails = async (ArtistId, object, config) => {
  try {
    const data = await client.put(
      `/artist/addDesignDetails/${ArtistId}`,
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
