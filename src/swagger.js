const swaggerAutogen =require( 'swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/module/users/user.route.js'];

swaggerAutogen(outputFile, endpointsFiles).then(()=>{
    require('./server.js')
});
