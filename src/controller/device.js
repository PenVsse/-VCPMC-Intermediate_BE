import Device from "../model/Device"

const getAll = async (req, res) => {

    try {
        const data = await Device.findAll();

        res.status(200).json({
            message: "Success",
            data
        })
    } catch (err) {
        res.status(500).json({
            message: "Server error"
        })
    }
}

export {
    getAll
}