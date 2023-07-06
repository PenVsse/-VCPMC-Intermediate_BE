import express from "express";
import UnitsUsedDetail from "../model/UnitsUsedDetail";

const UnitsUsedDetailRouter = express.Router();

UnitsUsedDetailRouter.get("/", async (req, res) => {
  try {
    const data = await UnitsUsedDetail.findAll();
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

export default UnitsUsedDetailRouter;
