FROM python:3.7-slim
LABEL mantainer="manguilar22@gmail.com"
WORKDIR /app
ADD . /app
RUN pip install --upgrade pip
RUN pip install --trusted-host pypi.python.org -r requirements.txt
EXPOSE 5000
CMD ["python","app.py"]