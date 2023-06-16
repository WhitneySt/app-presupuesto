import axios from "axios";

const getMovimiento = async(url, id) => {
    try {
        const { data } = await axios.get(`${url}/${id}`);
        return data;
    } catch (error) {
        console.log(error);
        return {};
    }
}

export default getMovimiento;