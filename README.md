# Udagram

This application is based on the starter project provided by Udacity. The contents of the apps themselves are unimportant as this is being used to test the deployment of the apps to, and the provisioning of Postgress database at, AWS using CircleCI pipeline.


## Front End Location
The front end can be viewed [here](http://nd0067-c4-frontend.s3-website-us-east-1.amazonaws.com/).


## CircleCI Status Badge
[![mikejpoole](https://circleci.com/gh/mikejpoole/nd0067-c4-udagram.svg?style=svg)](https://circleci.com/gh/mikejpoole/nd0067-c4-udagram)






## TODO files and folders:
*    .circleci/config.yml
*    this Readme with some basic documentation
*    a docs folder to include architecture diagram and more detailed documentation files (MD format) on infrastructure description, app dependencies, and pipeline process


## TODO PROVISION AWS (and show console screenshots):
*    AWS RDS for the database
*    AWS ElasticBeanstalk For the API
*    AWS S3 for web hosting (t4449)


## TODO:
*    Deploy your application to those services
*    Connect your GitHub repo to CircleCi
*    Configure a CircleCi pipeline to automate your deployments
*    Document the infrastructure needs (RDS, S3 Elastic Beanstalk, etc) and explain the different steps in the pipeline
*    Create architecture diagrams for an overview of the infrastructure and the pipeline


For Submission:
*    Provide the link to your hosted working Front-End Application in the README
*    Include a screenshot of your last build in CircleCi (in docs folder)
*    Screenshots of the configuration page of your AWS services (in docs folder)



## Getting Started

1. Open a terminal and navigate to the root of the repo
1. follow the instructions in the installation step

The project can run but is missing some information to connect to the database and storage service. These will be setup during the course of the project

### Dependencies

```
- Node v14.15.1 (LTS) or more recent. While older versions can work it is advisable to keep node to latest LTS version

- npm 6.14.8 (LTS) or more recent, Yarn can work but was not tested for this project

- AWS CLI v2, v1 can work but was not tested for this project

- A RDS database running Postgres.

- A S3 bucket for hosting uploaded pictures.

```

### Installation

Provision the necessary AWS services needed for running the application:

1. In AWS, provision a publicly available RDS database running Postgres. <Place holder for link to classroom article>
1. In AWS, provision a s3 bucket for hosting the uploaded files. <Place holder for tlink to classroom article>
1. Export the ENV variables needed or use a package like [dotnev](https://www.npmjs.com/package/dotenv)/.
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

## Built With

- [Angular](https://angular.io/) - Single Page Application Framework
- [Node](https://nodejs.org) - Javascript Runtime
- [Express](https://expressjs.com/) - Javascript API Framework

## License

[License](LICENSE.txt)
"# nd0067-c4-udagram" 
