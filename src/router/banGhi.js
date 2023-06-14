import express from 'express';
import { getAll, getBanGhiById } from '../controller/banGhi';

const banGhiRouter = express.Router();

banGhiRouter.get('/', getAll);
banGhiRouter.get('/id/:id', getBanGhiById);

export default banGhiRouter;