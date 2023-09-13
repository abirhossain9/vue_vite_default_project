export default {
    appName: "VueViteDefaultSetup",
    baseApiHost: import.meta.env.VITE_APP_API_BASE_URL,
    apiToken: localStorage.getItem('token'),
}
