import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID pgFvSHqLtwmQPiD_pRs4asZYPBiWQIdA8MZ1oSpiAf4'
    }
});