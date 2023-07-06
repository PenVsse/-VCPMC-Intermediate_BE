import express from "express";

import { getAll } from "../controller/banGhiUyQuyen";

const BanGhiUyQuyenRouter = express.Router();

BanGhiUyQuyenRouter.get('/', getAll);

export default BanGhiUyQuyenRouter;