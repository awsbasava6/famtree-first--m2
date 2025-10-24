pipeline {
    agent any

    environment {
        AWS_ACCOUNT_ID = '504913911119'
        AWS_REGION     = 'us-east-1'
        ECR_BACKEND    = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/famtree-server"
        ECR_FRONTEND   = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/famtree-client"
        SONAR_HOST     = 'http://52.205.85.49:9000'
        SONAR_TOKEN    = 'squ_ad40ba6ad85b1a16bf1c94b34b346d2d9d22ce41'
        CLUSTER_NAME   = 'famtree-cluster'
        SERVICE_NAME   = 'famtree-service'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/awsbasava6/famtree-first--m2.git'
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                dir('server') {
                    sh 'docker build -t ${ECR_BACKEND}:latest .'
                }
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                dir('client') {
                    sh 'docker build -t ${ECR_FRONTEND}:latest .'
                }
            }
        }
    }
}
