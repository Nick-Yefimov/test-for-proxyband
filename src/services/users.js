import axios from "axios";

export const getUsers = async () => {
  try {
    const response = await axios.get(
      "https://my-json-server.typicode.com/Nick-Yefimov/test-for-proxyband/users"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching users", error);
    return [];
  }
};
