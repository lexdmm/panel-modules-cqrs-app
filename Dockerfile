FROM node:18-alpine

WORKDIR /home/panel-form-generator-api

CMD npm run start:docker:dev

# run the command below to create the container
# docker build -t run dockerization-nestjs-projec .