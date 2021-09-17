import helmet from 'helmet';
import { json, urlencoded } from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';

export default (app) => {
  app.use(urlencoded({
    extended: true,
  }));
  app.use(json());
  // Sets standard secure HTTP headers
  app.use(helmet());
  // enables CORS with options
  app.use(cors());
  // Swagger API docs
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
