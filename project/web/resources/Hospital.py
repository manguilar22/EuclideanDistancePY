from flask import jsonify
from flask_restful import Resource
import json as j

from . import collection

class Hospital(Resource):
    def get(self):
        try:
            with open("./rest/BigHospitalSORT.json","r") as f:
                hospitals = j.load(f)
                f.close()
        except:
            return jsonify(dict(status="404",file="file not found"))
        finally:
            return jsonify(dict(hospitals=hospitals))