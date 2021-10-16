pipeline {
    agent {
        docker {
            image 'sitapati/docker-alpine-python-node'
            args '-p 3000:3000'
        }
    }
    environment { 
       CI='true'
    }
    stages {
        stage('Build') {
            steps {
             //   sh ' npm rm -rdf node_modules'
                sh 'npm install'
            }
        }
        stage('Run') { 
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