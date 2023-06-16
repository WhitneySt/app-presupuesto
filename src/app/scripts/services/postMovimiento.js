import axios from "axios";

const postMovimiento = async (url, newMovimiento) => {
  try {
    const response = await axios.post(url, newMovimiento);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default postMovimiento;
