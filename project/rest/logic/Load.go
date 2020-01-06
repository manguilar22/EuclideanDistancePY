package logic

import (
	"io/ioutil"
)

func Load(){
	GetCollege()
	GetHomeHospitals()
	GetBigHospitalData()
}

// Load files to REST

func GetCollege() (rest string){
	file, err := ioutil.ReadFile("./data/Colleges.json")
	if err != nil {
		return
	}
	rest = string([]byte(file))
	return
}

func GetHomeHospitals() (rest string) {
	file, err := ioutil.ReadFile("./data/SortedElPaso.json")
	if err != nil {
		return
	}
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