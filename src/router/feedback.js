import express from "express";
import Feedback from "../model/Feedback";

const feedbackRouter = express.Router();

feedbackRouter.get("/", async (req, res) => {
    try {
        const data = await Feedback.findAll();
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

export default feedbackRouter;