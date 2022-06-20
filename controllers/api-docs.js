import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json' assert { type: 'json' };

export const swaggerUiServe = (swaggerUi.serve);
export const swaggerUiSetup = swaggerUi.setup(swaggerDocument);
