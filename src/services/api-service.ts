import axios from "axios";

const Api = axios.create({
    baseURL: "http://cmttest-001-site1.ctempurl.com/"
});

export default Api;