package controller

import (
	"encoding/json"
	"fmt"
	"github.com/manguilar22/EuclideanDistancePY/project/rest/domain"
	"github.com/manguilar22/EuclideanDistancePY/project/rest/logic"
	"html/template"
	"net/http"
)

var tpl *template.Template


func MyHandle(w http.ResponseWriter, r *http.Request) {

	//Allow CORS here By * or specific origin
	w.Header().Set("Access-Control-Allow-Origin", "*")

	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	//data := AllData()

	//jsonData,err  = json.Marshal(data);

	//return string(jsonData)

}

func init()  {
	tpl = template.Must(template.ParseGlob("./public/*.gohtml"))
}

func MyLoadingDataHandle(w http.ResponseWriter, r *http.Request){
	allData := logic.GetCollege()
	data := domain.Colleges{}
	err := json.Unmarshal([]byte(allData),&data)
	if err != nil {
		fmt.Fprintln(w,"Failed to load json file")
	}
	err = tpl.ExecuteTemplate(w,"index",data)
	if err != nil {
		fmt.Fprintln(w,"Failed to make template")
	}
}

func MyLoadingHomeHospital(w http.ResponseWriter, r* http.Request){
	allData := logic.GetHomeHospitals()
	data := domain.HomeHospitals{}
	_ = json.Unmarshal([]byte(allData),&data)
	err := tpl.ExecuteTemplate(w,"home",data)
	if err != nil {
		fmt.Fprintln(w,"error creating the template")
	}
}

func MyLoadingWorldHospital(w http.ResponseWriter, r *http.Request){
	allData := logic.GetBigHospitalData()
	data := domain.WorldHostpital{}
	_ = json.Unmarshal([]byte(allData),&data)
	err := tpl.ExecuteTemplate(w,"hospital",data)
	if err != nil {
		fmt.Fprintln(w,"error creating the template")
	}
}