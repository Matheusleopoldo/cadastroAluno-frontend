import axios from 'axios'
 
const api = axios.create({
    baseURL: 'https://cadastroAluno-backend.herokuapp.com'
})
 
export default api;
