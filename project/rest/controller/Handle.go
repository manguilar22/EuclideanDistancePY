package controller

import (
	"net/http"
)

func MyHandle(w http.ResponseWriter, r *http.Request) {

	//Allow CORS here By * or specific origin
	w.Header().Set("Access-Control-Allow-Origin", "*")

	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	//data := AllData()

	//jsonData,err  = json.Marshal(data);

	//return string(jsonData)

}
