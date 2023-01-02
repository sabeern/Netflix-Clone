import axios from 'axios';
import {baseUrl} from './Cosnstant/Constants';

const instance = axios.create({
    baseURL: baseUrl,
  });

  export default instance;