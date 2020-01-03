package mongo

import (
	"context"
	"fmt"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

const (
	URI = "mongodb://127.0.0.1:27017"
	DBNAME = "myDB"
	DBCOLL = "college"
)


var client *mongo.Client

func InitializeMongoClient() (*mongo.Client, context.Context){
	fullPath := fmt.Sprintf("%s/%s",URI,DBNAME)
	ctx := context.Background()
	opts := options.Client()
	opts.ApplyURI(fullPath)
	opts.SetMaxPoolSize(5)
	client,err := mongo.Connect(ctx,opts)
	if err != nil {
		fmt.Println(err.Error())
	}
	return client,	context.Background()

}