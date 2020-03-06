# Vanilla-Marketplace
- [Introduction](#introduction)
- [Setup](#setup)
  - [Install Node.Js](#install-nodejs)
  - [Install MongoDB](#install-mongodb)
    - [Install Docker Desktop](#install-docker-desktop)
    - [Download MongoDB docker image](#download-mongodb-docker-image)
  - [Install IDE](#install-ide)
  - [Install the Server app](#install-the-server-app)
- [Running the app](#running-the-app)
  - [Start Docker desktop](#start-docker-desktop)
  - [Start the database](#start-the-database)
  - [Start the Server app](#start-the-server-app)
  - [Start the Client app](#start-the-client-app)
  
## Introduction
This repository contains a Vanilla.JS marketplace with a Node.Js server application and MongoDB integration.

We also make use of:
- HTML5
- CSS3
- Bootstrap
- Mongoose
- ES2015

## Setup
First of all you should clone this repository before anything else.

use the osx terminal to do this if you're on a mac or the git-bash shell if you use windows devices:
```sh
git clone https://github.com/AlexandruCalinica/vanilla-marketplace.git
```

### Install Node.Js
In a web browser, navigate to https://nodejs.org/en/download/. Click the Windows or MacOS Installer button to download the latest default version. The Node.js installer includes the NPM package manager.

After the installation is done, open a terminal or powershell and run:
```sh
node -v
```
to verify that the installation was successfull. 

### Install MongoDB
In order to run the MongoDB database efficiently across various operating systems we're going to deploy and run a docker image containing the official MongoDB instalation. 

#### Install Docker Desktop
Browse to https://www.docker.com/products/docker-desktop and choose your installer accordingly.
Download and run de installer(windows) / dmg(macos).

After the installation is done, open a terminal or powershell and run:
```sh
docker -v
```
to verify that the installation was successfull.

The last step required is to create a new account on https://hub.docker.com/. Use the account credentials to authenticate with the Docker Desktop application.

#### Download MongoDB docker image
Once you have a dockerhub account authenticated with the docker desktop app, open a terminal / powershell and execute:
```sh
docker pull mongo
```

after docker finished downloading the mongoDB image, execute the following command to see the list of all images available:
```sh
docker images
```

### Install IDE
Download and install Visual Studio Code from here https://code.visualstudio.com/download.

We're going to use the Live Server utility to run our client app from it.

- **_Disclaimer_** - **_Running the Client app from a different IDE or by a different method will require path changes inside the code and will most likely crash the app._**

### Install the Server app
Next step is to install the server dependencies with npm.
- Open a terminal/powershell at the root of the repository
- Navigate (cd) to the server directory using the terminal/powershell:
```sh
cd server
```

- install the server dependencies by executing:
```sh
npm install
```
this should create a **_node_modules_** directory at the root of the server folder.
## Running the app
### Start Docker Desktop
Open the docker desktop app and wait for the docker daemon to load.
### Start the database
In order to start up mongoDB you need to open a terminal/powershell and run the following command:
```sh
docker run -d -p 27017:27107 mongo
```
### Start the Server app
To start the server, navigate to the **_server_** directory from the repository root:
```sh
cd server
```
Execute the following command: 
```sh
npm start
```
if everything goes well, you should see a couple of logs in the terminal/powershell resembling:
```sh
[nodemon] starting `node index.js`
Server listening on port: 3003
Connected to database!
```
### Start the Client app
For starting the client app you must:
- Open the **_client_** directory inside Visual Studio Code IDE.
- Locate the **_index.html_** file at the root of **_client_** directory.
- Right click on it and choose ``Open With Live Server``.

If everything goes well, the browser should open a new tab by itself with the ``login`` page.
