from flask import jsonify
from flask_restful import Resource

import json

from . import database

class Home(Resource):

    def get(self):
        try:
            with open("./rest/SortedElPaso.json","r") as f:
                data = json.load(f)
                f.close()
        except:
            return jsonify(dict(status="404",file="file not found"))
        finally:
            return jsonify(dict(home=data))