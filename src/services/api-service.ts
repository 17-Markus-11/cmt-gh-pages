import axios from "axios";

const Api = axios.create({
    baseURL: 'https://localhost:7016/'
});

export default Api;