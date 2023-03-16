import client from "./client";

//add artist
export const addArtist = async (ArtistInfo) => {
  try {
    const { data } = await client.post("/artist/createArtist", ArtistInfo);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

//verify Artist
export const verifyArtist = async (ArtistInfo) => {
  try {
    const { data } = await client.post("/artist/signinArtist", ArtistInfo);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

//delete artist
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

//get the specific artist
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
    const data = await client.put(
      `/artist/updateArtist/${ArtistId}`,
      ArtistInfo
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

//deleting specifing art
export const deleteArt = async (artId, productId) => {
  try {
    const { data } = await client.put(
      `/artist/deleteArt/${artId}/${productId}`
    );
    console.log(data, artId, productId);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

//getting the art designs
export const getArtDesigns = async () => {
  try {
    const { data } = await client.get(`/artist/getArtDesigns`);
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
    const { data } = await client.put(
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
//forget passweord
export const forgetPassword = async (obj, config) => {
  try {
    const data = await client.post("/artist/forgetPassword", obj, config);
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
    const { data } = await client.put("/artist/resetPassword", obj, config);
    console.log(data);
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};
