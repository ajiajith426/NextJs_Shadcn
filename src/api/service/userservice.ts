import SERVER from "../config";

export const fetchUsers = async () => {
  try {
    const response = await SERVER.get(`/sample-data/users`);
    return response?.data as ResponseUserType;
  } catch (error) {
    return error;
  }
};