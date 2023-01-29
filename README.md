# Resume-Parser
## How to get started:

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Features

- Upload a resume in pdf format to the server for parsing
- View uploaded resumes and filter search for key words
- Modularized code, thus easy to understand

## Tools needed:
- Node.js - installation and base framework
- Express - backend server and parsing
- React.js - front end display and requester
- MongoDB - storage for parsed resume

## Creating a free MongoDB cluster
1. Log in to your MongoDB Atlas account at https://cloud.mongodb.com.
2. Click on the “Create” button.
3. Choose your cluster type (dedicated, serverless, shared).
4. Choose your cloud provider and region.
5. Click on “Create cluster.”

## Installation
1. Clone the git repository into your workspace
2. If node is installed:
```
    Switch to "./public" directory and in a terminal type npm install
    Switch to "./back-end" directory and in a terminal type npm install
```
3. Go to the "./back-end" directory and create a file called .env
4. In the .env file, insert MONGOURI=<cluster connection>
5. Replace <cluster connection> with a connection to your database. Follow the instruction below.
```
    https://www.mongodb.com/docs/atlas/driver-connection/
```

## Running the application

```
    Switch to "./public" directory and in a terminal type npm start
    Switch to "./back-end" directory and in a terminal type node index.js
```
This will run the applicaton on localhost:3000/ and localhost3001 respectively.
