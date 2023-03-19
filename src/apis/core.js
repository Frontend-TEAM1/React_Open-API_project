import axios from 'axios';

export const Axios = axios.create({
	baseURL: process.env.REACT_APP_OPENAPI_URL,
	headers: {
		Authorization: `bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
	},
});
