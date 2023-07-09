import express from "express";
import LichSuDoiSoat from "../model/LichSuDoiSoat";
import { sequelize } from "../config/database";

const lsdsRouter = express.Router();

lsdsRouter.get("/", async (req, res) => {
    try {
        const data = await LichSuDoiSoat.findAll();
        if (data)
            return res.status(200).json({
                message: "Success",
                data,
            });

        res.status(400).json({
            message: "Error",
        });
    } catch (err) {
        res.status(500).json({
            message: "Server error",
        });
    }
});

lsdsRouter.get("/detail", async (req, res) => {
    try {
        const data = await sequelize.query('SELECT * FROM lichsudoisoatdetails')
        if (data)
            return res.status(200).json({
                message: "Success",
                data,
            });

        res.status(400).json({
            message: "Error",
        });
    } catch (err) {
        res.status(500).json({
            message: "Server error",
        });
    }
});

export default lsdsRouter;