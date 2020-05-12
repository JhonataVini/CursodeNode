import axios from "axios"

const api = axios.create({
    baseURL: 'http://104.210.223.168:3333'
})
export default api;