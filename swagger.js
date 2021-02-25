const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: "Restful booker",
        description: "Description"
    },
    host: "localhost:3001",
    schemes: ['http']
}

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);