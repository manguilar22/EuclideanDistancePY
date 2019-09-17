from flask_restful import Resource
from flask import jsonify
from json import load
from resources import collection


class CollegeQ(Resource):
    '''MongoDB Queries for College Dataset'''

    def get(self):
        # Load Dataset
        college = "./rest/Colleges.json"
        with open(college,"r") as f:
            loader = load(f)
        f.close()
        # Insert to Mongo
        cursor = collection("college")
        if len(loader) != cursor.count():
            cursor.insert_many(list(map(lambda e: dict(e),loader)))
        else:
            findAll = cursor.find({},dict(_id=False))
            return jsonify(dict(college=list(findAll)))

