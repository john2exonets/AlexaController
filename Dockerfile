#
#  AlexaController Dockerfile
#
FROM node:alpine

RUN mkdir /alexa
WORKDIR /alexa

ADD package.json /alexa/
RUN npm install

# add app files & start
COPY AlexaControl.js /alexa

ADD VERSION .
ADD Dockerfile .
ADD build_container.sh .

EXPOSE 11274 1900

CMD [ "npm", "start" ]
