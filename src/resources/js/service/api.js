import axios from 'axios';

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const config = {
    baseURL: 'http://example.palmo/api/',
    headers: {
        "content-type": "application/json",
    }
}
const apiToken = localStorage.getItem("authToken");
if (apiToken) {
    config.headers.Authorization = `Bearer ${apiToken}`;
}
const axiosInstance = axios.create(config);

export {
    axiosInstance
}
