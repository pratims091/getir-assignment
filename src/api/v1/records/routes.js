import express from 'express';
import * as controller from './controller';
import * as validators from './vaidators';
import validateRequest from '../../../lib/requestValidator';

const router = express.Router();

router.get('/', [validators.index, validateRequest], controller.index);

export default router;
