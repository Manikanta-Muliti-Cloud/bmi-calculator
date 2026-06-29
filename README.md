# 🚀 BMI Calculator CI/CD Pipeline using GitHub, Jenkins, Docker, Amazon ECR & Amazon ECS

## 📌 Project Overview

This project demonstrates a complete **CI/CD (Continuous Integration & Continuous Deployment)** pipeline for deploying a Dockerized BMI Calculator application on AWS.

Whenever new code is pushed to GitHub, Jenkins automatically:

* Clones the latest source code
* Builds a Docker image
* Pushes the image to Amazon ECR
* Deploys the latest image to Amazon ECS
* Runs the updated application automatically

This project simulates a real-world DevOps workflow used in many organizations.

---

# 🏗 Project Architecture

```
Developer
     │
     ▼
GitHub Repository
     │
     ▼
Jenkins Pipeline
     │
     ▼
Docker Build
     │
     ▼
Amazon ECR
     │
     ▼
Amazon ECS (Fargate)
     │
     ▼
Running Web Application
```

---

# 🛠 Technologies Used

* Git
* GitHub
* Jenkins
* Docker
* Dockerfile
* AWS CLI
* IAM
* Amazon Elastic Container Registry (ECR)
* Amazon Elastic Container Service (ECS)
* Nginx
* Linux (Ubuntu EC2)

---

# 📁 Project Structure

```
bmi-calculator/
│
├── index.html
├── style.css
├── script.js
├── Dockerfile
├── README.md
```

---

# Step 1 - Create BMI Calculator

The BMI Calculator is a simple static web application developed using:

* HTML
* CSS
* JavaScript

The application calculates BMI using:

BMI = Weight / (Height × Height)

---

# Step 2 - Push Project to GitHub

Initialize Git

```
git init
```

Add files

```
git add .
```

Commit

```
git commit -m "Initial Commit"
```

Create GitHub Repository

Push project

```
git remote add origin <repository-url>

git push -u origin main
```

GitHub becomes the source code repository.

---

# Step 3 - Dockerize the Application

Create Dockerfile

```dockerfile
FROM nginx:alpine

COPY . /usr/share/nginx/html

EXPOSE 80
```

Explanation

FROM nginx:alpine

Downloads lightweight Nginx image.

COPY

Copies project files inside container.

EXPOSE 80

Application will run on Port 80.

Build Docker Image

```
docker build -t bmi .
```

Run locally

```
docker run -d -p 80:80 bmi
```

---

# Step 4 - Install Jenkins

Launch Ubuntu EC2.

Install

* Java
* Jenkins
* Docker
* AWS CLI
* Git

Add Jenkins user to Docker group

```
sudo usermod -aG docker jenkins
```

Restart Jenkins

```
sudo systemctl restart jenkins
```

---

# Step 5 - Configure AWS CLI

Login as Jenkins user

```
sudo su - jenkins
```

Configure AWS

```
aws configure
```

Provide

AWS Access Key

AWS Secret Key

Region

```
ap-south-1
```

Verify

```
aws sts get-caller-identity
```

---

# Step 6 - Create Amazon ECR Repository

Repository Name

```
bmi
```

Purpose

Stores Docker Images.

---

# Step 7 - Jenkins Pipeline

Pipeline Stages

## Stage 1

Clone GitHub Repository

Downloads latest source code.

---

## Stage 2

Build Docker Image

```
docker build
```

Creates Docker image.

---

## Stage 3

Login to Amazon ECR

Authenticates Docker with AWS.

---

## Stage 4

Tag Docker Image

Associates image with ECR repository.

---

## Stage 5

Push Docker Image

Uploads image to Amazon ECR.

---

## Stage 6

Deploy to Amazon ECS

Runs

```
aws ecs update-service --force-new-deployment
```

ECS automatically pulls latest image.

---

# Step 8 - Create ECS Cluster

Cluster Type

Fargate

Benefits

No EC2 management.

AWS manages infrastructure.

---

# Step 9 - Create Task Definition

Task Definition contains

Container Image

CPU

Memory

Port Mapping

Execution Role

---

# Step 10 - Create ECS Service

Service maintains

Desired Tasks

Auto Recovery

Automatic Deployments

---

# Step 11 - Automatic Deployment

Developer changes code

↓

Pushes to GitHub

↓

Jenkins Job

↓

Docker Build

↓

Push Image to ECR

↓

ECS Deployment

↓

Application Updated

No manual deployment required.

---

# Skills Demonstrated

* Git Version Control
* GitHub
* Jenkins Pipelines
* CI/CD
* Docker
* Dockerfile
* Amazon ECR
* Amazon ECS
* AWS CLI
* IAM
* Linux Administration
* Nginx
* Automation

---

# Project Outcome

Successfully built and deployed a Dockerized BMI Calculator application using a complete CI/CD pipeline.

The deployment process is fully automated from source code commit to application deployment on Amazon ECS.

---

# Future Improvements

* Jenkins Webhooks
* SonarQube Integration
* Trivy Security Scanning
* Multi-stage Docker Builds
* Build Versioning
* Terraform Infrastructure as Code
* Kubernetes (Amazon EKS)
* Helm Charts
* Prometheus Monitoring
* Grafana Dashboards

---

# Learning Outcomes

This project helped me understand:

* Source Code Management
* Docker Image Lifecycle
* Container Registries
* CI/CD Pipeline Design
* AWS Container Services
* Automated Deployments
* Infrastructure Automation

These concepts form the foundation for advanced DevOps projects such as Kubernetes, GitOps, Infrastructure as Code, and Cloud-Native deployments.

---

## 👨‍💻 Author

**Manikanta Pillimetla**

DevOps Engineer (Learning)

GitHub: https://github.com/Manikanta-Muliti-Cloud

