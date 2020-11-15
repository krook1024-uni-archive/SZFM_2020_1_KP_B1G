import { AuthProvider } from "react-admin";
import axios from "axios";

const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    const response = await axios.post(
      "http://localhost:3004/auth/login/admin",
      null,
      {
        auth: {
          username,
          password,
        },
      }
    );
    try {
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("password", response.data.password);
      return Promise.resolve();
    } catch (err) {
      return Promise.reject();
    }
  },
  checkError: (error) => {
    if (error.status === 401 || error.status === 403) {
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem("username") && localStorage.getItem("password")
      ? Promise.resolve()
      : Promise.reject();
  },
  logout: () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    return Promise.resolve();
  },
  getPermissions: (params) => {
    return Promise.resolve();
  },
};

export default authProvider;
