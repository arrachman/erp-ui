import axios from 'axios';
import {urlPath} from './Config';

export const Delete = (module, path) => {
    const promise = new Promise ((resolve, reject) => {
        axios.delete(`${urlPath(module)}${path}`)
        .then((result)=> {
            resolve(result.data);
        }, (err) => {
            reject(err);
        }).then(() => {
            // console.log('Always show')
        })
    });

    return promise;
}


export const DELETE_AXIOS = (module, path) => {
    return axios({method:'delete', url:`${urlPath(module)}${path}`}, {headers: {
        'Authorization': `Bearer ${localStorage.getItem("fixToken")}`,
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }});
}