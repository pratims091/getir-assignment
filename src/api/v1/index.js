import express from 'express';
import recordsRoutes from './records/routes';

const router = express.Router();

// All the V1 APIs goes here
router.use('/records', recordsRoutes);

export default router;
