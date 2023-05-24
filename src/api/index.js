import axios from "axios";

const mainUrl = axios.create({
   baseURL: "https://certificate-d3ut.onrender.com"
})

export default mainUrl