import axios from "axios";

const url = process.env.REACT_APP_HOSTNAME || "127.0.0.1:8000";

export const routes = {
	home: axios.get(`http://${url}/home`),
    hospitals: axios.get(`http://${url}/hospitals`)
}
