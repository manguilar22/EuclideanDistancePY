FROM node:latest
COPY . /app
WORKDIR /app
RUN npm install
RUN npm audit fix
CMD npm start
EXPOSE 3000
