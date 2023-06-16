import axios from "axios";

const deleteMovimiento = async (url, id) => {
    try {

        const urlMovimiento = `${url}/${id}`
        const response = await axios.delete(urlMovimiento);
        return response
        
    } catch (error) {
        console.log(error)
        return error
    }
    
}

export default deleteMovimiento;