import axios from "axios";

const API_URL = "http://localhost:3000";

const apiService = {
    loginUser: async (userData) => {
        const response = await axios.post(`${API_URL}/user/login`, userData);
        return response.data;
    }
}

export default apiService