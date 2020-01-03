package logic

import (
	"encoding/json"
	"github.com/manguilar22/EuclideanDistancePY/project/rest/domain"
	"github.com/manguilar22/EuclideanDistancePY/project/rest/mongo"
	"io/ioutil"
	"log"
)

// Load files to REST

func GetCollege() (data domain.Colleges) {
	file, err := ioutil.ReadFile("./data/Colleges.json")
	if err != nil {
		return
	}

	data = domain.Colleges{}

	_ = json.Unmarshal([]byte(file),&data)

	return
}

func GetHomeHospitals() (rest string) {
	file, err := ioutil.ReadFile("./data/SortedElPaso.json")
	if err != nil {
		return
	}
	data := domain.HomeHospitals{}

	_ = json.Unmarshal([]byte(file),&data)

	rest = string([]byte(file))
	return

}


func GetBigHospitalData() (rest string) {
    file,err := ioutil.ReadFile("./data/BigHospitalSORT.json");
    if err != nil {
        return
    }
    rest = string([]byte(file))
    return
}


func LoadFilesToDatabase() (test string){
	// test = did it work? yes or no ?
	client,ctx := mongo.InitializeMongoClient()
	db := client.Database(mongo.DBNAME)
	coll := db.Collection(mongo.DBCOLL)
	p,_ := ioutil.ReadFile("./data/Colleges.json")
	rest := []byte(p)
	data := domain.Colleges{}
	_ = json.Unmarshal(rest,&data)
	coll.InsertOne(ctx,"")
	for _,element := range data{
		_,err := coll.InsertOne(ctx,element)
		if err != nil {
			log.Fatalln("Could not insert document:",element)
		}
	}
	return "works"
}
