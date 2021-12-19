FROM node:14

WORKDIR /movie-app
COPY package.json .
RUN npm install
COPY . .
CMD npm start