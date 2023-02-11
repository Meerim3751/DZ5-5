import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://63da3f0f2af48a60a7c8b948.mockapi.io'
});

export default instance;