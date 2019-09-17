from pymongo import MongoClient
from pymongo.errors import ConnectionFailure, ServerSelectionTimeoutError

err = "No, database is present."

# Connect to MongoDB across source-files within module
client = MongoClient("mongodb://127.0.0.1:27017")
database = client["__mongo-data__"]
try:
    client.admin.command("ismaster")
except ConnectionFailure:
    print(err)
except ServerSelectionTimeoutError:
    print(err)
finally:
    collection = lambda name: database[name]
