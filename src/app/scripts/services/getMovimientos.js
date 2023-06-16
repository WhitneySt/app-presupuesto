import axios from "axios";

const getMovimientos = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getMovimientos;

