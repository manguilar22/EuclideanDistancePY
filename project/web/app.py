from flask import Flask
from flask_restful import Api
from flask_cors import CORS

# Public Routes
from resources.Rest import Rest
from resources.Locations import Locations
from resources.Home import Home
from resources.College import College
from resources.Hospital import Hospital

# Private Routes
from resources.private.Database import Database
from resources.private.ShowCollections import ShowCollections

# Rest-Api Queries
from resources.private.queries.HomeQ import HomeQ
from resources.private.queries.HospitalQ import HospitalQ
from resources.private.queries.CollegeQ import CollegeQ

app = Flask(__name__)

cors = CORS(app,resources={r"*":{"origins":"*"}}) # Allow REST requests from React

api = Api(app)

# Public Routes (Static - Files)
api.add_resource(Rest,"/rest",endpoint="rest")
api.add_resource(Home,"/home",endpoint="home")
api.add_resource(Locations,"/locations",endpoint="locations")
api.add_resource(College,"/colleges",endpoint="colleges")
api.add_resource(Hospital,"/hospitals",endpoint="hospitals")

# Private Routes (Mongodb - Registry)
api.add_resource(Database,"/admins",endpoint="admins")
api.add_resource(ShowCollections,"/admin/",endpoint="collections")  #/admin/<collection_name>?name=<query>

# Private Routes (Mongodb - Manipulation)
api.add_resource(CollegeQ,"/mongodb/colleges",endpoint="College Collection Queries")
api.add_resource(HomeQ,"/mongodb/homes",endpoint="Home Collection Queries")
api.add_resource(HospitalQ,"/mongodb/hospitals",endpoint="Hospital Collection Queries")

@app.route("/")
def hello():
    return "Hello, World"

if __name__ == "__main__":
    app.run(host="0.0.0.0",port=5000,debug=True)
