package main

import (
	"fmt"
	"github.com/gorilla/mux"
	"github.com/manguilar22/EuclideanDistancePY/project/rest/controller"
	"github.com/manguilar22/EuclideanDistancePY/project/rest/domain"
	"log"
	"net/http"
	"os"
)

func main () {


	router := mux.NewRouter()


	// WEB
	router.HandleFunc("/public",controller.CollegePageTest)


	router.HandleFunc("/", func(writer http.ResponseWriter, request *http.Request) {
		fmt.Fprintln(writer,"Works")
	}).Methods(http.MethodGet)

	router.HandleFunc("/college",domain.College{}.ServeData).Methods(http.MethodGet)
	router.HandleFunc("/home",domain.Home{}.ServeData).Methods(http.MethodGet)
	router.HandleFunc("/hospital",domain.Hospital{}.ServeData).Methods(http.MethodGet)


	///////////////////////////////////// BAD DESIGN
	 var address string
	 port := os.Getenv("PORT")					// ENV PORT
	 // IF NO PORT SPECIFIED, THEN DEFAULT IS 8000
	 if port == ""{
	 	address = ":8000"
	 } else {
	 	address = fmt.Sprintf(":%d",port)
	 }
	 ///////////////////////////////////// BAD DESIGN
	 server := &http.Server{Handler:router,Addr:address}
	 log.Fatalln(server.ListenAndServe())

}