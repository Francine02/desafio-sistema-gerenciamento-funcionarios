import express from 'express';
import swaggerUi from 'swagger-ui-express';

import swaggerFile from './configs/swagger/swagger-output.json';
import { CompanyRoutes } from './modules/company/routes/company.route';
import { EmployeeRoutes } from './modules/employee/routes/employee.route';
import { errorHandler } from './shared/middlewares/error-handler.middleware';

const app = express();

app.use(express.json());

app.use(CompanyRoutes);
app.use(EmployeeRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(errorHandler);

export default app;
