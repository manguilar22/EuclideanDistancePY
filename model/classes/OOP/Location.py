import math
import os
import hashlib
from pandas import DataFrame

class Location(object):

    def __init__(self, name, northDeg, northMin, northSec, eastDeg, eastMin, eastSec):
        """
        :param name:
        :param northDeg:
        :param northMin:
        :param northSec:
        :param eastDeg:
        :param eastMin:
        :param eastSec:
        :return: Location Object
        """
        self.name = name
        self.northDeg = northDeg
        self.northMin = northMin
        self.northSec = northSec
        self.eastDeg = eastDeg
        self.eastMin = eastMin
        self.eastSec = eastSec
    
    def UUID(self,num=31):
        salt=os.urandom(num).hex()
        e=str(salt+self.name).encode("UTF-8")
        return hashlib.sha512(e).hexdigest()

    def latitudeDMS(self):
        return tuple([self.northDeg, self.northMin, self.northSec])

    def longitudeDMS(self):
        return tuple([self.eastDeg, self.eastMin, self.eastSec])

    def DMS(self):
        return tuple([ self.latitudeDMS(), self.longitudeDMS()])

    # Convert DMS -> DD
    # Formula := dd= degree + (min/60) + (second/3600)

    def latitudeDecimalDegree(self):
        f= round(float(float(self.northDeg)+float(self.northMin/60)+float(self.northSec/3600)),16)
        return f

    def longitudeDecimalDegree(self):
        f= round(float(float(self.eastDeg)+float(self.eastMin/60)+float(self.eastSec/3600)),16)
        return -f

    def DD(self):
        return tuple([self.latitudeDecimalDegree(),self.longitudeDecimalDegree()])

    def display(self):
        print("""
            UUID: {uuid}
            Name: {name} 
            DMS_lat: {dms_lat}
            DMS_lon: {dms_lon}
            DD_lat: {dd_lat}
            DD_lon: {dd_lon}
            DMS: {dms} 
            DD: {dd}
        """.format(uuid=self.UUID(),
                   name=self.name,
                   dms_lat=self.latitudeDMS(),
                   dms_lon=self.longitudeDMS(),
                   dd_lat=self.latitudeDecimalDegree(),
                   dd_lon=self.longitudeDecimalDegree(),
                   dms=self.DMS(),
                   dd=self.DD()))

    def to_json(self):
        json = '''
            {
                name: {},
                dd: {},
                ddLat: {},
                ddLon: {}
            }
        '''
        json.format(self.name,self.DD(),self.latitudeDecimalDegree(),self.longitudeDecimalDegree())
    def __repr__(self):

        s="""       UUID: {uuid}
                    Name: {name} 
                    DMS_lat: {dms_lat}
                    DMS_lon: {dms_lon}
                    DD_lat: {dd_lat}
                    DD_lon: {dd_lon}
                    DMS: {dms} 
                    DD: {dd}
                """.format(uuid=self.UUID(),
                           name=self.name,
                           dms_lat=self.latitudeDMS(),
                           dms_lon=self.longitudeDMS(),
                           dd_lat=self.latitudeDecimalDegree(),
                           dd_lon=self.longitudeDecimalDegree(),
                           dms=self.DMS(),
                           dd=self.DD())
        return s
