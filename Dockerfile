# base image
FROM node:12.2.0-alpine

# set working directory
RUN mkdir app
WORKDIR /app

# install and cache app dependencies
COPY . /app
RUN npm install
RUN npm install react-scripts -g

EXPOSE 3000

# start app
CMD ["npm", "start"]