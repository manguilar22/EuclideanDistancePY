from numpy.linalg import norm as euclidean
from numpy import array as array
from datetime import datetime as dt
import time


class Algorithms(object):

    def __init__(self):
        pass

    def shortestPath(self, registry, records):
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
          
            
            result = dict(
                start_name=start_name,
                start_lat=start_loc[0], 
                start_lon=start_loc[1],
                end_name=end_name,
                end_lat=end_lat,
                end_lon=end_lon
            )
            c.append(result)
            res.clear()
        return c
    
    def euclideanDistance(self, a):
        """Make a map of the shortest distance between points in a Set"""
        c = []
        res = []
        z = 0
        while (len(a) > z):
            copy = a.copy()
            analysis = copy
            del analysis[z]
            for i in analysis:
                res.append(euclidean(array(a[z]) - array(i)))
            minimum = res.index(min(res))
            collection = ( analysis[minimum], a[z] )
            c.append(collection)
            res.clear()
            z += 1
        return c

    def find(self, target, arr):
        """
        :param target, expecting tuple
        :param list values
        :return shortest Euclidean Distance
        """
        t = tuple(target)
        analysis = list(arr)
        del analysis[analysis.index(t)]
        c = []
        for i in analysis:
            c.append(euclidean(array(t) - array(i)))
        return analysis[c.index(min(c))]

    def binarySearch(self, arr, k):
        """
        O(log * n)
        :param arr: Sorted Array
        :param k: Key for Selection
        :return: Index
        """
        lo = 0
        hi = len(arr) - 1
        while (hi >= lo):
            mid = (hi + lo) // 2
            if (arr[mid] == k):
                return mid
            elif (arr[mid] > k):
                hi -= 1
            elif (arr[mid] < k):
                lo -= 1
            else:
                return None