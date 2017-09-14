# Test Nodejs Application for microservices - Multiple Application

This repo is an example for multiple application microservices.

## Dependencies
* Node js 8 and above
* Forever (Global)


## Usage
There are two services in here as example: Cart & Search

You can run each service independently over server.js which is located in sub service's folder or you can run these services at the same time with services.js which is located in root folder. 

## Running all services at the same time

Firstly you must run;

``npm install``

Then you can call this command in the root folder;

``npm run up``


## Running single service

Firstly you must run;

``npm install``

Then you can run any service with this command in related services foler;

``npm run up``


With the multiple application microservice structure you can separate your dependencies and create separated build / deploy logic easily.