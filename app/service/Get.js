import axios from 'axios';
import {urlPath} from './Config';

const Get = (module, path, root) => {
    const promise = new Promise ((resolve, reject) => {
        let dataHeader = {headers: {
            'Authorization': `Bearer ${localStorage.getItem("fixToken")}`,
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }};
        axios({method:'get', url:`${urlPath(module)}${path}`}, dataHeader)
        .then((result)=> {
            resolve(result.data);
        }, (err) => {
            reject(err);
        }).then(() => {
            
        })
    });

    return promise;
}

export default Get;