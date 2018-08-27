import axios from 'axios';
import { merge } from 'lodash';

const BASE_URL = '/api/v1';

const send = (url, options = {}) => {
    const base = {
        url: `${BASE_URL}${url}`,
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    options = merge(base, options);

    return axios(options);
}

export const getComments = async () => {
    try {
        const result = await send('/comments');
        return result.data;
    }
    catch(ex){
        throw ex;
    }
}

export const postComment = async (email, message) => {
    try {
        const result = await send('/comments', {
            method: 'post',
            data: {
                email, 
                message
            }
        });
        return result.data;
    }
    catch(ex){
        throw ex;
    }
}