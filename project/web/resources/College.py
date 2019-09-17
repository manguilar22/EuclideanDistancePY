from flask_restful import Resource
from flask import jsonify 
import json as j 

from . import collection

class College(Resource): 
    
    def get(self):

        try:
            with open("./rest/Colleges.json","r") as f:
                data = j.load(f)
                f.close()
        except:
            return jsonify(dict(status="404",file="file not found"))
        finally:
            return jsonify(dict(college=data))