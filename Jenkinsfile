pipeline {
    agent any

    environment {
        AWS_REGION = 'ap-south-1'
        ACCOUNT_ID = '958125727363'
        ECR_REPO = 'bmi'
        IMAGE_NAME = 'bmi'
        ECS_CLUSTER = 'practical-penguin-6w03ut-bmi-cluster'
        ECS_SERVICE = 'bmi-calculator-service-kbmt3y6x'
    }

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main',
                url: 'https://github.com/Manikanta-Muliti-Cloud/bmi-calculator.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ${IMAGE_NAME}:latest .'
            }
        }

        stage('Login to Amazon ECR') {
            steps {
                sh '''
                aws ecr get-login-password --region ${AWS_REGION} | \
                docker login \
                --username AWS \
                --password-stdin ${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com
                '''
            }
        }

        stage('Push Image') {
            steps {
                sh '''
                docker tag ${IMAGE_NAME}:latest ${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPO}:latest

                docker push ${ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPO}:latest
                '''
            }
        }

        stage('Deploy ECS') {
            steps {
                sh '''
                aws ecs update-service \
                --cluster ${ECS_CLUSTER} \
                --service ${ECS_SERVICE} \
                --force-new-deployment \
                --region ${AWS_REGION}
                '''
            }
        }

    }

    post {
        success {
            echo "Deployment Successful"
        }

        always {
            cleanWs()
        }
    }
}
