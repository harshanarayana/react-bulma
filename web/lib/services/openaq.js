
import axios from 'axios';

const BASE_URL = 'https://api.openaq.org/v1';

export const getMeasurementParameters = () => {
    return axios.get < Measurements > BASE_URL + "/parameters";
};