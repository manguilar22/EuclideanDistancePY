from numpy.linalg import norm as euclidean
from numpy import array as array
from datetime import datetime as dt
import time


class Algorithms(object):

    def __init__(self):
        pass

    def euclideanDistance(self, a):
        """Make a map of the shortest distance between points in a Set"""
        start = dt.now()
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
            collection = [ analysis[minimum], a[z] ]
            c.append(tuple(collection))
            res.clear()
            z += 1
        # Time
        end = dt.now() - start
        f = time.gmtime(end.seconds)
        s = "--- {}:{}:{} CPU Elapsed Time. ---\nSeconds:\t{} ".format(f.tm_hour, f.tm_min, f.tm_sec, end.total_seconds())
        print(s)
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