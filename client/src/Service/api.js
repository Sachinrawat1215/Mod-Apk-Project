import axios from 'axios';

const URL = "http://localhost:8000";

const submitDetail = async (data) => {
    try {
        return await axios.post(`${URL}/create`, data);
    } catch (error) {
        console.log(`failed to submit app details and error is ${error}`);
    }
}

const getAllPost = async () => {
    try {
        let response = await axios.get(`${URL}`);
        return response.data;
    } catch (error) {
        console.log(`failed to run getAllPost your error is ${error}`);
    }
}

export { submitDetail, getAllPost };