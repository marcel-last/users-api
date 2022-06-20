import express from 'express';
import { swaggerUiServe, swaggerUiSetup } from '../controllers/api-docs.js';

const router = express.Router();

router.use('/', swaggerUiServe);
router.get('/', swaggerUiSetup);

export default router;
