import express from "express";
import { getAll } from "../controller/unitUsed"

const UnitsUsedRouter = express.Router();

UnitsUsedRouter.get("/", getAll)

export default UnitsUsedRouter;
