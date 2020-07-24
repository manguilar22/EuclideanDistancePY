FROM node:latest
WORKDIR /app
COPY . /app
ENV REACT_APP_HOSTNAME=127.0.0.1:8000
RUN npm install
#RUN npm audit fix
CMD npm start
EXPOSE 3000
