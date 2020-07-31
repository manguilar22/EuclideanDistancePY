import axios from "axios";

const url = process.env.REACT_APP_HOSTNAME || "127.0.0.1:8000";

const instance = axios.create({
    baseURL: `http://${url}`
});

export const routes = {
	home: instance.get(`/home`),
    hospitals: instance.get(`/hospitals`)
}
