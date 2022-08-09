import axios from "axios";

//base URL
const instance = axios.create({
    //baseURL
    baseURL: "https://fakestoreapi.com/"
    //Header
    //Timeout

})
export default instance