from numpy.linalg import norm as euclidean
from numpy import array as array
from datetime import datetime as dt
import time


def shortestPath(registry, records):
        """Make a map of the shortest distance between points in a Set"""
        c = []
        res = []
        for idx, e in enumerate(records):
            copy = records[:]
            analysis = copy 
            del analysis[idx]
            
            start_name = e["name"]
            start_loc = (e["lat"], e["lon"])
            
            for i in analysis:
                end_name = i["name"]
                end_loc = (i["lat"], i["lon"])
                distance = euclidean(array(start_loc) - array(end_loc))
                res.append(distance)
                                
            minimum = res.index(min(res)) 
            end = analysis[minimum]
            end_name = end["name"] 
            end_lat = end["lat"] 
            end_lon = end["lon"] 
            end_distance = res[minimum]
                        
            result = dict(
                start_name=start_name,
                start_lat=start_loc[0], 
                start_lon=start_loc[1],
                end_name=end_name,
                end_lat=end_lat,
                end_lon=end_lon,
                distance=end_distance
            )
            c.append(result)
            res.clear()
        return c


def allPaths(registry, records):
        """Make a map of the shortest distance between points in a Set"""
        pathRegistry = dict() 
        for idx, e in enumerate(records):
            copy = records[:]
            analysis = copy 
            del analysis[idx]
            
            start_name = e["name"]
            start_loc = (e["lat"], e["lon"])
            
            paths = [] 
            
            for i in analysis:
                end_name = i["name"]
                end_loc = (i["lat"], i["lon"])
                distance = euclidean(array(start_loc) - array(end_loc))
                
                col = dict(end_name=end_name, end_lat=end_loc[0], end_lon=end_loc[1], distance=distance)
                paths.append(col)

            pathRegistry[start_name] = paths.copy()
            paths.clear()
            
        return pathRegistry