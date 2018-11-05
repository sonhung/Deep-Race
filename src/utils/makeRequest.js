import axios from 'axios';

const makeGetRequest = (url) => {
    return axios.get(url);
}

export {
    makeGetRequest
};