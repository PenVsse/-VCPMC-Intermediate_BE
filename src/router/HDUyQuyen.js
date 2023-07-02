import express from "express";

import { getAll, getById } from "../controller/HDUyQuyen";

const hdUyQuyenRouter = express.Router();

hdUyQuyenRouter.get('/', getAll);
hdUyQuyenRouter.get('/id/:id', getById);

export default hdUyQuyenRouter;