import HDUyQuyen from "../model/HDUyQuyen";

const getAll = async (req, res) => {
    try {
        const data = await HDUyQuyen.findAll();

        res.status(200).json({
            message: "Success",
            data,
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
        const data = await HDUyQuyen.findOne({
            where: {
                id,
            },
        });

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
};

export { getAll, getById };