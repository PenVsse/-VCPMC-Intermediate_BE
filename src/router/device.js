import express from 'express';
import { getAll } from '../controller/device';

const deviceRouter = express.Router();

deviceRouter.get("/", getAll);


export default deviceRouter;