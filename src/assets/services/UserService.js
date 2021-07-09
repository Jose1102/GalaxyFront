import axios from 'axios';

const USERS_REST_API_URL = 'http://localhost:8080/galaxy/usuarios';
const USERS_SAVE_REST_API_URL = 'http://';

class UserService{

    getUsers(){
        return axios.get(USERS_REST_API_URL);

    }

    addUser(user){
        return axios.post(USERS_REST_API_URL,user);

    }
}

export default new UserService();