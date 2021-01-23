import * as packageJson from '../package.json'

import swaggerJsdoc from 'swagger-jsdoc'

// import { Options } from 'swagger-jsdoc'

const options = {
  swaggerDefinition: {
    openapi: '3.0.1',
    components: {},
    info: {
      title: packageJson.name,
      version: packageJson.version,
      description: packageJson.description,
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Local environment',
      },
      {
        url: 'https://mystagingserver.com',
        description: 'Staging environment',
      },
      {
        url: 'https://myprodserver.com',
        description: 'Production environment',
      },
    ],
  },
  apis: ['**/models/*.js', '**/v1/routes/*.js', '**/v2/routes/*.js'],
}

const specs = swaggerJsdoc(options)

export { specs }
