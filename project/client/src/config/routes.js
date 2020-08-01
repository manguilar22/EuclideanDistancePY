import axios from "axios";

const url = `http://${process.env.REACT_APP_HOSTNAME}` || "http://127.0.0.1:8000";

const instance = axios.create({
    baseURL: url
});

export const routes = {
	home: instance.get("/home"),
    hospitals: instance.get("/hospitals")
}


