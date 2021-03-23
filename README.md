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


## Building
Linux commands are used for the build commands so this will not build on a Windows machine.

## TODO files and folders:
*    .circleci/config.yml

## TODO PROVISION AWS (and show console screenshots):
*    AWS RDS for the database
*    AWS ElasticBeanstalk For the API
*    AWS S3 for web hosting (t4449)

## TODO:
*    Deploy your application to those services
*    Connect your GitHub repo to CircleCi
*    Configure a CircleCi pipeline to automate your deployments
*    Include a screenshot of your last build in CircleCi (in screenshots folder)
*    Screenshots of the configuration page of your AWS services (in screenshots folder)

## Getting Started

1. Open a terminal and navigate to the root of the repo
1. follow the instructions in the installation step

The project can run but is missing some information to connect to the database and storage service. These will be setup during the course of the project

### Installation
Provision the necessary AWS services needed for running the application:

1. In AWS, provision a publicly available RDS database running Postgres. <Place holder for link to classroom article>
1. In AWS, provision a s3 bucket for hosting the uploaded files. <Place holder for tlink to classroom article>
1. Export the ENV variables needed or use a package like dotenv.
1. From the root of the repo, navigate udagram-api folder `cd starter/udagram-api` to install the node_modules `npm install`. After installation is done start the api in dev mode with `npm run dev`.
1. Without closing the terminal in step 1, navigate to the udagram-frontend `cd starter/udagram-frontend` to intall the node_modules `npm install`. After installation is done start the api in dev mode with `npm run start`.

## Testing
This project contains two different test suite: unit tests and End-To-End tests(e2e). Follow these steps to run the tests.

1. `cd starter/udagram-frontend`
1. `npm run test`
1. `npm run e2e`

There are no Unit test on the back-end

### Unit Tests:
Unit tests are using the Jasmine Framework.

### End to End Tests:
The e2e tests are using Protractor and Jasmine.