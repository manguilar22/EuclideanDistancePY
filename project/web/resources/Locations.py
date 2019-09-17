from flask_restful import Resource
from flask import jsonify
import pickle as p
import os

class Locations(Resource):

    def get(self):
        s = "./rest/"
        filename = "Locations.dat"
        path = s + filename
        with open(path,"rb") as f:
            data = p.Unpickler(f).load()
            f.close()
        return jsonify(data)
