import wolframalpha as w
class AskWolfram(object):

    app_id="A77T9L-JY92QG7W88"
    client=w.Client(app_id=app_id)

    def __init__(self):
        pass

    def askDirectly(self,question):
        s=str(question).strip()
        r=self.client.query(question)
        return next(r.results).text

    def prompt(self):
        s=str(input("Hello, user\n Ask Wolfram Computing Engine a question")).strip()
        r=self.client.query(s)
        return next(r.results()).text

