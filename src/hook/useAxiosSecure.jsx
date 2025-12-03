import axios from "axios";

const instance = axios.create({
     baseURL: 'https://some-domain.com/api/',
})
const useAxiosSecure = () => {
    return instance
};

export default useAxiosSecure;