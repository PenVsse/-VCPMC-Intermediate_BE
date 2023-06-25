import Schedule from "../model/Schedule";

const getAll = async (req, res) => {
    try {
        const data = await Schedule.findAll();

        res.status(200).json({
            data,
            message: "Success",
        });
    } catch (err) {
        res.status(500).json({
            message: "Server error",
        });
    }
};

const getById = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await Schedule.findOne({
            where: {
                id,
            },
        });

        res.status(200).json({
            data,
            message: "Success",
        });
    } catch (err) {
        res.status(500).json({
            message: "Server error",
        });
    }
};

export { getAll, getById };