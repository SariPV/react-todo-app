pipeline {
    agent {
        docker {
            image 'sitapati/docker-alpine-python-node'
            args '-p 3000:3000'
        }
    }
    environment { 
        CI="true"
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm cache clean --force --unsafe-perm'
                sh 'npm install'
              
            }
        }
        
        stage('Running') { 
            steps {
                sh 'npm start &' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
            }
        
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}