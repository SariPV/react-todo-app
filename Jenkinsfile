pipeline {
    agent {
        docker {
            image 'sitapati/docker-alpine-python-node'
            args '-p 3000:3000'
        }
    }
    environment { 
        npm_config_cache = 'npm-cache'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm rebuild'
            }
        }
        
        stage('Running') { 
            steps {
                sh 'npm start &' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh './jenkins/scripts/kill.sh' 
            }
        
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}