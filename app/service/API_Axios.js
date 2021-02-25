import axios from 'axios';
import {urlPath} from './Config';

export const INSERT_AXIOS = (module, path, data) => {
    console.log('insert data', data)
    return axios({method:'POST', url:`${urlPath(module)}${path}`, data:data}, {headers: {
        'Authorization': `Bearer ${localStorage.getItem("fixToken")}`,
        'Accept': 'application/json'
    }});
}

export const UPDATE_AXIOS = (module, path, data) => {
    return axios({method:'put', url:`${urlPath(module)}${path}`, data:data}, {headers: {
        'Authorization': `Bearer ${localStorage.getItem("fixToken")}`,
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded'
    }});
}