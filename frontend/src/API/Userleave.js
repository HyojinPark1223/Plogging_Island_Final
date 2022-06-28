import axios from "axios";

const Userleave = async () => {
  try {
    const userId = window.localStorage.getItem("user");
    const response = await axios.delete(
      `https://www.ploggingisland.com/api/user/leave/${userId}`,
    );

    return response;
  } catch (response) {
    return {
      status: response.status,
    };
  }
};

export default Userleave;
