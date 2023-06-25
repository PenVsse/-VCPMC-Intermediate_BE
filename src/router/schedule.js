import express from "express";
import { getAll, getById } from "../controller/schedule";

const scheduleRouter = express.Router();

scheduleRouter.get("/", getAll);
scheduleRouter.get("/id/:id", getById);

export default scheduleRouter;