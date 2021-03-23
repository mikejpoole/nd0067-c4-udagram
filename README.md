# Udagram
This application is based on the starter project provided by Udacity. The contents of the apps themselves are unimportant as this is being used to test the deployment of the apps to, and the provisioning of Postgress database at, AWS using CircleCI pipeline.

## Front End Location
The front end can be viewed [here](http://nd0067-c4-frontend.s3-website-us-east-1.amazonaws.com/).

## CircleCI Status Badge
[![mikejpoole](https://circleci.com/gh/mikejpoole/nd0067-c4-udagram.svg?style=svg)](https://circleci.com/gh/mikejpoole/nd0067-c4-udagram)

## Infrastructure
The infrastructure and the pipeline are documented [here](/docs/infrastructure.md).

## Installation
To install the API run `npm run api:install`.
To install the front end run `npm run frontend:install`.

## Testing
Running `npm run test` will perform unit tests on:

* API = Jest
* Front end = Angular tests using Karma and Jasmine (use `ctrl + c` to quit)

Running `npm run e2e` will perform an end to end test on the front end using Protractor and Jasmine. Chrome 89 (the latest at the time of writing) will be required on your system.

## A Note About Building
Linux commands are used for the build commands so this will not build on a Windows machine.

## TODO files and folders:
* .circleci/config.yml

## TODO PROVISION AWS (and show console screenshots):
* Fix IAMs Issue (t4450)
* AWS RDS for the database (t4378)
* AWS ElasticBeanstalk For the API (t4379)
* AWS S3 for web hosting (t4449)

## TODO:
* Deploy your application to those services
* Configure a CircleCi pipeline to automate your deployments
* Include a screenshot of your last build in CircleCi (in screenshots folder)
* Screenshots of the configuration page of your AWS services (in screenshots folder)