import xhrReq from "../utils/auth/xhr";

const login = (username, password) => {
  return xhrReq({
    path: "/auth/login",
    method: "POST",
    body: {
      username,
      password,
    },
  });
};

const logout = () => {
  return xhrReq({
    path: "/auth/logout",
    method: "DELETE",
  });
};

const register = (username, password) => {
  return xhrReq({
    path: "/auth/register",
    method: "POST",
    body: {
      username,
      password,
    },
  });
};

const AuthService = {
  login,
  logout,
  register,
};

export default AuthService;
