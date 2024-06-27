import axios from "axios";
const PORT = 3005
const API_URL = "http://localhost:"+PORT;

const apiService = {
    loginUser: async (userData) => {
        const url = `${API_URL}/user/login`
        const response = await axios.post(url, userData);
        return response;
        //return response.data;
    },

    registerUser: async (userData) => {
        const url = `${API_URL}/user/register`
        const response = await axios.post(url, userData)        
        return response;
    },

    getUserById: async (userId) => {
        const url = `${API_URL}/user/${userId}`
        console.log(url)
        console.log(userId)
        const response = await axios.get(url);
        return response;
    },

    scheculeAppointment: async (newAppointment) => {
        const url = `${API_URL}/appointment/schedule`
        const response = await axios.post(url, newAppointment)
        return response;
    },

    cancelAppointment: async (appointmentId) => {
        const url = `${API_URL}/appointment/cancel/${appointmentId}`
        const response = await axios.get(url);
        return response;
    },
    getAppointmentById: async (id) => {
        const url = `${API_URL}/appointment/${id}`
        const response = await axios.get(url);
        return response;
    }


}

export default apiService