import axios from "axios";

const patchMovimiento = async (url, id, editMovimiento) => {
  try {
    const editUrl = `${url}/${id}`;
      const response = await axios.patch(editUrl, editMovimiento);
      console.log(response);
      return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default patchMovimiento;
