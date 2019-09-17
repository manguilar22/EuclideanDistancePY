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
api.add_resource(College,"/college",endpoint="college")
api.add_resource(Hospital,"/hospital",endpoint="hospital")

# Private Routes (Mongodb - Registry)
api.add_resource(Database,"/admin",endpoint="admin")
api.add_resource(ShowCollections,"/admin/",endpoint="collections")  #/admin/<collection_name>?name=<query>

# Private Routes (Mongodb - Manipulation)
api.add_resource(CollegeQ,"/mongodb/college",endpoint="College Collection Queries")
api.add_resource(HomeQ,"/mongodb/home",endpoint="Home Collection Queries")
api.add_resource(HospitalQ,"/mongodb/hospital",endpoint="Hospital Collection Queries")

@app.route("/")
def hello():
    return "Hello, World"

if __name__ == "__main__":
    app.run(host="0.0.0.0",port=5000,debug=True)
