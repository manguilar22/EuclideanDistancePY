package domain

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

/*
Name
Address
City
Zip
Web
ProgramName
 */

type Colleges []College

type College struct {

	 Name string `json:"name" bson:"name"`
	 Address string `json:"address" bson:"address"`
	 City string `json:"city" bson:"city"`
	 Zip string  `json:"zip" bson:"zip"`
	 Web string  `json:"web" bson:"web"`
	 ProgramName string `json:"programName" bson:"programName"`

}

func (c College) GetData() string {
	file, err := ioutil.ReadFile("./data/Colleges.json")
	if err != nil {
		return ""
	}
	rest := string([]byte(file))
	return  rest
}

func (c College) ServeData(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Access-Control-Allow-Origin", "*")

	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	fmt.Fprintln(w,College{}.GetData())
}

