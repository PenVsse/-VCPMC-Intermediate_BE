import express from 'express';
import { getAll } from "../controller/HDKhaiThac";

const hdKhaiThacRouter = express.Router();

hdKhaiThacRouter.get('/', getAll);

export default hdKhaiThacRouter;
