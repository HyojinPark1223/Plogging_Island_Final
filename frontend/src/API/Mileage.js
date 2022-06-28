import axios from "axios";

const lookupMileage = async () => {
  try {
    const userId = window.localStorage.getItem("user");
    const response = await axios.get(
      `https://www.ploggingisland.com/api/user/mileage/${userId}`,
    );
    return {
      mileage: response.data.mileage,
      userId,
    };
  } catch (response) {
    return {
      status: response.status,
    };
  }
};

const updateMileage = async userInfo => {
  try {
    const response = await axios.put(
      "https://www.ploggingisland.com/api/user/mileage",
      userInfo,
    );
    return response;
  } catch (response) {
    return {
      status: response.status,
    };
  }
};

const lookupAllMileage = async () => {
  try {
    const response = await axios.get(
      "https://www.ploggingisland.com/api/user/info",
    );
    return response.data.result;
  } catch (response) {
    return {
      status: response.status,
    };
  }
};

export { lookupMileage, updateMileage, lookupAllMileage };
