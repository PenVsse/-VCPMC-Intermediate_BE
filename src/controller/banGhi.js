import BanGhi from "../model/BanGhi"


const getAll = async (req, res) => {
    try {
        const data = await BanGhi.findAll();
        if (data) return res.status(200).json({
            message: 'Success',
            data
        })

        res.status(400).json({
            message: 'Error'
        })
    }catch(err) {
        res.status(500).json({
            message: 'Server error'
        })
    }
}

const getBanGhiById = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const banGhi = await BanGhi.findOne({
            where: {
                id
            }
        })

        if (banGhi) return res.status(200).json({
            message: 'Success',
            data: banGhi
        })

        res.status(400).json({
            message: 'Error'
        })
    }catch(err) {
        res.status(500).json({
            message: 'Server error'
        })
    }
}

export {
    getAll,
    getBanGhiById
}