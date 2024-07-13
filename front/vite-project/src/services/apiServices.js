import axios from "axios";
const PORT = 3004
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

    scheduleAppointment: async (newAppointment) => {
        console.log("Linea 28",newAppointment)
        /*newAppointment = {
            "date": "2024-05-29",
            "time": "12:00",
            "userId": "2"
        }*/
        const url = `${API_URL}/appointment/schedule`
        const response = await axios.post(url, newAppointment)
        return response;
    },

    cancelAppointment: async (appointmentId) => {
        const url = `${API_URL}/appointment/cancel/${appointmentId}`
        const response = await axios.put(url);
        return response;
    },
    getAppointmentById: async (id) => {
        const url = `${API_URL}/appointment/${id}`
        const response = await axios.get(url);
        return response;
    }
}

export default apiService