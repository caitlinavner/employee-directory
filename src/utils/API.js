import axios from 'axios';


export default {
    getAPIUsers: function () {
        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
};