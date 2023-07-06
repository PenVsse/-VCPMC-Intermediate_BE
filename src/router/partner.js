import express from "express";
import Partner from "../model/Partner";

const partnerRouter = express.Router();

partnerRouter.get("/", async (req, res) => {
  try {
    const data = await Partner.findAll();
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

export default partnerRouter;
