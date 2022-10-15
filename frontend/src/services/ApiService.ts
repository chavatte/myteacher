import axios from "axios";

export const ApiService = axios.create({
    baseURL: 'https://api-myteacher.chavatte.online/',
    headers: {
        'Content-Type': 'application/json'
    }
});