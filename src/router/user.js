import express from "express";
import { login } from "../controller/user";
import User from "../model/User";

const userRouter = express.Router();

userRouter.post("/login", login);
userRouter.get("/", async (req, res) => {
    try {
        const data = await User.findAll();
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

export default userRouter;