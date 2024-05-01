# Prometheus, Grafana workshop


## Introduction
This workshop is designed to help you get started with Prometheus and Grafana. We will be using a simple application that exposes metrics in Prometheus format. We will then use Prometheus to scrape these metrics and Grafana to visualize them.

## Prerequisites
- Docker
- Docker Compose
- Git

## Usage
Use the following commands to clone the repository and start the services:

```bash
cd app
mvn package
docker compose up
```