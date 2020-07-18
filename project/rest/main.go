package main

import (
	"fmt"
	"github.com/gorilla/mux"
	"github.com/manguilar22/EuclideanDistancePY/project/rest/domain"
	"log"
	"net/http"
)

func main () {

	router := mux.NewRouter()

	// WEB
	//router.HandleFunc("/public",controller.CollegePageTest)

	router.HandleFunc("/", func(writer http.ResponseWriter, request *http.Request) {
		fmt.Fprintln(writer,"Works")
	}).Methods(http.MethodGet)

	router.HandleFunc("/colleges",domain.College{}.ServeData).Methods(http.MethodGet)
	router.HandleFunc("/home",domain.Home{}.ServeData).Methods(http.MethodGet)
	router.HandleFunc("/hospitals",domain.Hospital{}.ServeData).Methods(http.MethodGet)

     var address string = ":8000"
	 server := &http.Server{Handler:router,Addr:address}
	 log.Fatalln(server.ListenAndServe())

}