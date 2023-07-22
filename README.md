# CICD for Node.js

![Node.js Logo](http://nodejs.org/images/logos/nodejs.png)<!-- Replace "nodejs-logo.png" with your logo if desired -->

This repository contains a Continuous Integration and Continuous Deployment (CICD) setup for a Node.js application using Docker containers. The CICD pipeline is designed to automate the build and deployment process.

## Workflow

The workflow is triggered on every push to the `main` branch.

## Build Job

The `build` job is responsible for building the Docker image for the Node.js application and pushing it to Docker Hub.

## Deploy Job

The `deploy` job is dependent on the `build` job and handles the deployment of the newly built Docker container to the target server using SSH.

## Usage

To use this CICD pipeline for your Node.js application, follow these steps:

1. Fork this repository to your GitHub account.

2. Set up the required secrets in your repository settings:
   - `DOCKERHUB_USERNAME`: Your Docker Hub username.
   - `DOCKERHUB_TOKEN`: Your Docker Hub access token.
   - `DOCKER_REPO`: Your Docker Hub repository name.
   - `HOST`: The target server's IP or domain name for deployment.
   - `USER_NAME`: The username for SSH access to the target server.
   - `SSH_KEY`: The SSH private key for authentication.

3. On every push to the `main` branch, the CICD pipeline will automatically trigger the build and deployment process for your Node.js application.



## Acknowledgments

- [Docker](https://www.docker.com/) for providing a powerful container platform.
- [GitHub Actions](https://github.com/features/actions) for enabling CICD automation.
- [Node.js](https://nodejs.org/) for the runtime environment.

