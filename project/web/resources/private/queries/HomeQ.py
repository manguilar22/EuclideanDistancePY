from flask_restful import Resource
from flask import jsonify
from json import load
from resources import collection


class HomeQ(Resource):
    '''MongoDB Queries for Home Dataset'''

    def get(self):
        # Load Dataset
        homeData = "./rest/SortedElPaso.json"
        with open(homeData,"r") as f:
            loader = load(f)
        f.close()
        # Insert to Mongo
        cursor = collection("home")
        if len(loader) != cursor.count():
            cursor.insert_many(list(map(lambda e: dict(e),loader)))
        else:
            findAll = cursor.find({},dict(_id=False))
            return jsonify(dict(home=list(findAll)))

