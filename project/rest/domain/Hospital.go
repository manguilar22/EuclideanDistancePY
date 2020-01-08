package domain

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

/*
name
start_lat
start_lon
end_name
end_lon
end_lat
*/

type WorldHostpital []Hospital

type Hospital struct {

	Name string	`json:"name" bson:"name"`
	StartLat float64 `json:"start_lat" bson:"start_lat"`
	StartLon float64 `json:"start_lon" bson:"start_lon"`
	EndName string `json:"end_name" bson:"end_name"`
	EndLon float64 `json:"end_lon" bson:"end_lon"`
	EndLat float64 `json:"end_lat" bson:"end_lat"`

}

func (h Hospital) GetData() string {
	file, err := ioutil.ReadFile("./data/BigHospitalSORT.json")
	if err != nil {
		return ""
	}
	rest := string([]byte(file))
	return rest
}

func (h Hospital) ServeData(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Access-Control-Allow-Origin", "*")

	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	fmt.Fprintln(w,Hospital{}.GetData())
}


