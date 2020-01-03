package domain

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

