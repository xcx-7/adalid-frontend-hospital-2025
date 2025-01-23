pipeline {
    agent any

    stages {
        stage('Code') {
            steps {
                echo 'Cloning the code'
                git url: "https://github.com/xcx-7/adalid-frontend-hospital-2025.git", branch: "main"
            }
        }
        
        stage('Build') {
            steps {
                echo 'Building the code'
                sh "docker build -t hospital-app ."
                // sh "docker run -p 5173:5173 hospital-app"
                sh "docker run -d -p 5173:5173 hospital-app"

            }
        }

        stage('Push to DockerHub') {
            steps {
                echo 'Pushing to DockerHub'
                // Add your DockerHub push command here, for example:
                // sh "docker push your-dockerhub-username/hospital-app:latest"
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the code'
                // Add your deployment logic here (e.g., deploying to a server or Kubernetes)
            }
        }
    }
}





////////////////////////Login succeded code//////////////////////////////////////



pipeline {
    agent any

    stages {
        stage('Code') {
            steps {
                echo 'Cloning the code'
                git url: "https://github.com/xcx-7/adalid-frontend-hospital-2025.git", branch: "main"
            }
        }

        stage('Build') {
            steps {
                echo 'Building the code'
                sh "docker build -t hospital-app ."
                sh "docker run -d -p 5173:5173 hospital-app"
            }
        }

        stage('Push to DockerHub') {
            steps {
                echo 'Pushing to DockerHub'
                withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
                    sh "docker login -u ${dockerHubUser} -p ${dockerHubPassword}"
                    sh "docker tag hospital-app ${dockerHubUser}/hospital-app:latest"
                    sh "docker push ${dockerHubUser}/hospital-app:latest"
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the code'
                // Add your deployment logic here (e.g., deploying to a server or Kubernetes)
            }
        }
    }
}


///////////////////////////////////////End of code////////////////////////////////////////////////////////