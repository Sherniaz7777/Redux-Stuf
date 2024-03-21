import axios from "../axios";


class UserApi{
    createUser (data){
        return axios.post("/users", data, {
            headers: {
                "Content-Type": "application/json"}
        })
    }
    loginUser (data){
        return axios.post("/auth/login", data, {
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}

export default new UserApi