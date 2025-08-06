import axios from 'axios';
const $api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});
$api.interceptors.request.use(async (config) => {
    console.log('request');
    return config;
}, error => {
    throw error;
});
$api.interceptors.response.use(response => {
    console.log('response');
    return response;
}, error => {
    throw error;
});
export default $api;
