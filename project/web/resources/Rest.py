from flask import jsonify
from flask_restful import Resource, request

import pickle as p
import os


class Rest(Resource):

    def get(self):
        """
        Get Rest Information
        :return: available files
        """
        files = os.listdir("./rest/")
        if files is None:
            return jsonify(dict(status="404",file="file not found"))
        return jsonify(dict(endpoints=list(files)))
