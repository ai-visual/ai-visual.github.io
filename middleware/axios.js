import axios from 'axios';

axios.defaults.baseURL = 'https://ai-visual.github.io';
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';