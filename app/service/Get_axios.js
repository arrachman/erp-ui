import axios from 'axios';
import {urlPath} from './Config';

const Get_axios = (module, path, root) => {
    return axios({method:'get', url:`${urlPath(module)}${path}`}, {headers: {
        'Authorization': `Bearer ${localStorage.getItem("fixToken")}`,
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }});
}

export default Get_axios;