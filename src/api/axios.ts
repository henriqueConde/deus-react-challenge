/* eslint-disable prefer-destructuring */
import Axios from 'axios';

const BASE_URL = 'http://localhost:9000/';

export const axios = Axios.create({
  baseURL: BASE_URL,
});
