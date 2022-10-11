FROM node:14.17.5-alpine as track

WORKDIR /app

COPY Cobros_LandingPreferencias .

RUN npm install

COPY . /app

RUN npm run build:staging

FROM nginx:1.17.1-alpine

RUN ln -s /usr/share/zoneinfo/America/Bogota /etc/localtime
RUN echo "America/Bogota" > /etc/timezone