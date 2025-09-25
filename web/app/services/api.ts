import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
});

export const AuthService = {
  signin: (data: { email: string; password: string }) => {
    return api.post("/auth/signin", data);
  },
};

export const UsersService = {
  fetchUser: () => {
    return api.get("/users/profile").then((res) => res.data);
  },
};
