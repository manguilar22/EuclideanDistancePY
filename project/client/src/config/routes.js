import axios from "axios";

export const routes = {
	home: axios.get("http://" + process.env.REACT_APP_HOSTNAME + ":8000/home"),
    hospitals: axios.get("http://" + process.env.REACT_APP_HOSTNAME + ":8000/hospitals")
}
