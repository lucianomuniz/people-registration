# Project Title

People Registration

## Project Description

This project delivery a REST API and a Client App that lists person and yours phone numbers.

The Server side API have CRUD funcionality to handle people data on Client side.

## The data

### `id`

This is the id of the person;

### `name`

This is the name of the person;

### `phones`

Array os phone numbers;

### `ddd`

The phone DDD number;

### `number`

The phone number;

## API Routes

The routes are prepared for versioning as the project grows and as needed, and were configured to work with the Version 1 (v1).

To access the APIs use the URL: [http://0.0.0.0:8000/](http://0.0.0.0:8000/v1/) or [http://localhost:8000](http://localhost:8000) if the app running on developement mode, and add the routes below after the URL to access the APIs data.

The postman scripts, used to test the API routes, is included on the project root folder `people-registration.postman_collection.json`.\
You can import it on [Postman](https://www.postman.com/).

The routes available are:

### GET [/v1/people/](http://localhost:8000/v1/people/)

Lists all people recorded on database.

### POST [/v1/people/](http://localhost:8000/v1/people/)

Inserts the given person in database.

### POST [/v1/people/:id](http://localhost:8000/v1/people/1)

Updates the given person in database.

### DELETE [/v1/people/:id](http://localhost:8000/v1/people/2)

Deletes the given person from database.

## Available Scripts

In the project directory, you can run:

### `install-server`

Installs the server npm packages

### `install`

Installs the app npm packages

### `server`

Runs the server on production.

### `watch`

Runs the server on development watch mode.

### `deploy`

Deploys the app.

### `test`

Launches the unit test runner.

## Deployment

Instructions to create a docker image and deploy the application.\
The Docker Server must be installed and running on the development environment.

### `docker build . -t lucianomuniz/people-registration`

Build a Docker image.

### `docker run -it -p 8000:8000 lucianomuniz/people-registration`

Execute a Docker image container to test the app on localhost.

### `docker login`

Login on: [http://hub.docker.com](http://hub.docker.com).\
And create Docker Hub repository.

### `docker push lucianomuniz/cpeople-registration`

Push the image on Docker Hub.

### `ssh -i ".\keys\keys.pem" ec2-user@<server IP>`

Access AWS EC2 instance.

### `sudo yum update -y`

On Linux, check package updates (package manager) using “yum”.

### `sudo yum install docker`

Install Docker on Linux.

### `sudo service docker start`

Start Docker server on Linux.

### `sudo docker info`

Get Docker information.

### `sudo usermod -a -G docker ec2-user`

Insert “ec2-user” user on “docker” root group.

### `docker login`

Deploy docker component on linux via Docker Hub.

### `docker run --restart=always -p 8000:8000 lucianomuniz/people-registration`

Start docker container.

## Technologies used

List os thechnologies used in this projects: npm packages, frameworks, etc.

### Server Side

#### Node

JavaScript runtime environment.

#### Express

Package used as middleware and build routes.

#### MongoDB

No-SQL Database.

#### Mongoose

Object modeling for MongoDB.

#### Morgan

Provides logs middleware for Express.

#### Cors

Security middleware for Express.

#### Dotenv

Config file and loads environment variables separeted from code.

#### Docker

Build and manage containers of the application.

#### Git

Version control system.

#### GitHub

Git repository manager.

#### GitHub CI Actions / Workflows

Continuous Integration solution integrated to GitHub.

#### AWS EC2

Amazon cloud server solution.

#### Postman

API plataform to manage API requests.

### Client Side

#### React

React front-end library.

#### React-Router

React router library.

## Disclaimer

This is a challenge by [D3Set](https://d3set.com.br/).
