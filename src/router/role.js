import express from "express";
import Role from "../model/Role";

const roleRoter = express.Router();

roleRoter.get("/", async (req, res) => {
    try {
        const data = await Role.findAll();
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

export default roleRoter;