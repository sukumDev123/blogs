FROM node:8.11.3-alpine

RUN mkdir /node
WORKDIR /node

COPY . /node