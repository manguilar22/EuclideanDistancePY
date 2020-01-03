package logic

import (
	"encoding/json"
	"github.com/manguilar22/EuclideanDistancePY/project/rest/domain"
	"io/ioutil"
)

// Load files to REST

func GetCollege() (data domain.Colleges) {
	file, err := ioutil.ReadFile("./data/Colleges.json")
	if err != nil {
		return
	}

	data = domain.Colleges{};

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

	//p,_ := json.Marshal(data)
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



