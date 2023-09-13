
import axios from 'axios';
import config from "@/config/config";
import {useRouter} from 'vue-router'
const  router = useRouter();

// Create an Axios instance with custom configurations
const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_APP_API_BASE_URL, 
    // timeout: config.requestTimeout,
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-TOKEN": window.csrf_token,
      "Authorization": localStorage.getItem('token') || config.apiToken,
      "Access-Control-Allow-Origin": "*",
    }
});

// Add any custom headers you need

// You can also intercept requests or responses globally

// axiosClient.interceptors.response.use(response=>{
//     return response
// }, error => {
//     if (error.response.status === 401){
//         localStorage.removeItem('token')
//         router.push('login')
//     }else if (error.response.status === 404){
//         router.push('not-found')
//     }
// })

export default axiosClient;
