from flask_restful import Resource
from flask import jsonify
from json import load
from resources import collection

class HospitalQ(Resource):
    ''' MongoDB queries for BigHospital Dataset'''

    def get(self):
        # Load Dataset
        dataset = "./rest/BigHospitalSORT.json"
        with open(dataset,"r") as f:
            hospitals = load(f)
        f.close()
        cursor = collection("hospital")
        if len(hospitals) != cursor.count():
            insert_many = map(lambda e: dict(e),hospitals)
            cursor.insert_many(list(insert_many))
        else:
            findAll = cursor.find({},dict(_id=False))
            return jsonify(dict(hospitals=list(findAll)))