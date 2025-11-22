import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { swaggerDoc } from './configs/swagger.config';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

export default app;
