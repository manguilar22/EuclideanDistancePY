package main

import (
	"fmt"
	"github.com/gorilla/mux"
	"github.com/manguilar22/EuclideanDistancePY/project/rest/logic"
	"log"
	"net/http"
)

func main () {
	logic.LoadFilesToDatabase()

	router := mux.NewRouter()



	router.HandleFunc("/", func(writer http.ResponseWriter, request *http.Request) {
		fmt.Fprintln(writer,"Works")
	}).Methods(http.MethodGet)

	router.HandleFunc("/college",func( w http.ResponseWriter, r *http.Request){
		fmt.Fprintln(w,logic.GetCollege())
	})


	router.HandleFunc("/home",func(w http.ResponseWriter, r *http.Request){
		//Allow CORS here By * or specific origin
		w.Header().Set("Access-Control-Allow-Origin", "*")

		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		fmt.Fprintln(w,logic.GetHomeHospitals())
	})

    router.HandleFunc("/hospital",func (w http.ResponseWriter, r *http.Request){
    	//Allow CORS here By * or specific origin
    	w.Header().Set("Access-Control-Allow-Origin", "*")

    	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
        fmt.Fprintln(w,logic.GetBigHospitalData())
    })


	 server := &http.Server{Handler:router,Addr:":8000"} // Change port to environment variable
	 log.Fatalln(server.ListenAndServe())

}