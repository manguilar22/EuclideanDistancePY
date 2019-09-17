from flask import jsonify
from flask_restful import Resource

from .. import client,database,err

from pymongo.errors import ServerSelectionTimeoutError

class ShowCollections(Resource):

    def get(self):

        try:
            client.admin.command("ismaster")
        except ServerSelectionTimeoutError:
            return jsonify(dict(status=400,message=err))

        """
        Get Collections in MongoDB
        :return: dictionary of collections
        """
        json = database.list_collection_names()
        return jsonify(dict(collections=list(json)))