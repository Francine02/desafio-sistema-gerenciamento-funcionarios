import swaggerAutogen from 'swagger-autogen';

import { doc } from './doc.config';

const outputFile = './swagger-output.json';

const endpointsFiles = [
  './src/modules/company/routes/company.route.ts',
  './src/modules/employee/routes/employee.route.ts',
];

swaggerAutogen(outputFile, endpointsFiles, doc);
