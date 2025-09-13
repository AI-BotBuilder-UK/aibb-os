pipeline {
  agent any
  environment {
    PREVIEW_URL = 'https://preview-y575snn7--ai-modular-scalable-6.deploypad.app'
  }
  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm install node-fetch@2'
      }
    }
    stage('Health Check') {
      steps {
        sh 'npm run healthcheck'
      }
    }
    stage('Smoke Tests') {
      steps {
        sh 'npm run test:smoke'
      }
    }
  }
  post {
    failure {
      echo '❌ Tests failed—please fix bot preview URLs or API endpoints before deploying.'
    }
    success {
      echo '✅ All tests passed—deployment ready.'
    }
  }
}