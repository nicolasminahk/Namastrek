import axios from 'axios'

const AppManager = axios.create({
    baseURL: 'http://localhost:4000/',
    responseType: 'json',
    withCredentials: true,
})

export default AppManager
