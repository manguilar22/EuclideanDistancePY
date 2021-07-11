import hashlib,os

class Record(object):

    def __init__(self,name,address,city,zip_code,web,program_name):
        self.name=name
        self.address=address
        self.city=city
        self.zip_code=zip_code
        self.web=web
        self.program_name=program_name
        
    def UUID(self,num=31):
        salt=os.urandom(num).hex()
        e=str(salt+self.name).encode("UTF")
        return hashlib.sha512(e).hexdigest()

    def __repr__(self):
        s="""
        UUID: {id}
        Name: {name}
        Address: {address}
        City: {city} 
        Zip Code: {zipCode} 
        Web: {web} 
        Program Name: {pr_name}
        """.format(id=self.UUID(),
                   name=self.name,
                   address=self.address,
                   city=self.city,
                   zipCode=self.zip_code,
                   web=self.web,
                   pr_name=self.program_name)
        return s

