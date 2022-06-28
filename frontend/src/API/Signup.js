import axios from "axios";

const signupApi = async userInfo => {
  console.log(userInfo);
  try {
    const response = await axios.post(
      "https://www.ploggingisland.com/api/user/join",
      userInfo,
    );
    return response;
  } catch (response) {
    return {
      status: response.status,
    };
  }
};

const IdCheckApi = async id => {
  try {
    const response = await axios.get(
      `https://www.ploggingisland.com/api/user/idcheck/${id}`,
    );

    return response;
  } catch (response) {
    return {
      status: response.status,
    };
  }
};

export { signupApi, IdCheckApi };
