import axios from "axios";

const LoginApi = async userInfo => {
  try {
    const response = await axios.post(
      "https://www.ploggingisland.com/api/user/login",
      userInfo,
    );
    localStorage.setItem("user", userInfo.id);
    return response;
  } catch (response) {
    return {
      status: response.status,
    };
  }
};

export default LoginApi;
