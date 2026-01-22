import axios from 'axios'

const Fstoreapi = axios.create({
    baseURL: 'https://fakestoreapi.com',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default Fstoreapi

Fstoreapi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    },
)
