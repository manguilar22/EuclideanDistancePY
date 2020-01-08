package controller

import (
	"fmt"
	"github.com/manguilar22/EuclideanDistancePY/project/rest/domain"
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

func CollegeTestHandler(w http.ResponseWriter, r *http.Request){
	//w.Header().Set("Access-Control-Allow-Origin", "*")

	//w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	data := domain.College{}
	w.WriteHeader(http.StatusOK)
	fmt.Fprintln(w,data.GetData())
}

func CollegePageTest(w http.ResponseWriter, r *http.Request){
	tpl.Execute(w,"GZJdkjd")
}
