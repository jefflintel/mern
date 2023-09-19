import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {
    console.log("logged in");
  },
  logout: () => {
    console.log("logged out");
  },
});
