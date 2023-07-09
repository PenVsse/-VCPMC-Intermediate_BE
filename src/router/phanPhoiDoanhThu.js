import express from "express";
import PhanPhoiDoanhThu from "../model/PhanPhoiDoanhThu";
import { sequelize } from "../config/database";

const ppdtRouter = express.Router();

ppdtRouter.get("/", async (req, res) => {
  try {
    const data = await PhanPhoiDoanhThu.findAll();
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

ppdtRouter.get("/detail-left", async (req, res) => {
  try {
    const data = await sequelize.query('SELECT * FROM ppdtdetailleft')
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
})

ppdtRouter.get("/detail-right", async (req, res) => {
  try {
    const data = await sequelize.query('SELECT * FROM ppdtdetailright')
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
})

export default ppdtRouter;