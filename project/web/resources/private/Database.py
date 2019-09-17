from flask import jsonify, request
from flask_restful import Resource

from .. import client,database,collection,err

from pymongo.errors import ServerSelectionTimeoutError

class Database(Resource):

    def get(self):

        try:
            client.admin.command("ismaster")
        except ServerSelectionTimeoutError:
            return jsonify(dict(status=400,message=err))

        # Rest Parameters
        args = request.args
        # Parameters
        collection_name = args["name"]
        if collection_name is None:
            return jsonify(dict(status=404,message="Failed, please provide a valid name of a collection"))
        # Response
        response = collection(name=collection_name)
        parsed = list(response.find({},dict(_id=False)))
        if response is None:
            return jsonify(dict(status="this collection does not exist"))
        return jsonify(dict(collection=parsed))

