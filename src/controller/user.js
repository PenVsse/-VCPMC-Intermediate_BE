import Role from "../model/Role";
import User from "../model/User";


const login = async (req, res) => {
    try {
        const {
            username,
            password
        } = req.body;

        User.belongsTo(Role, { foreignKey: 'roleId' });

        const user = await User.findOne({
            where: {
                username,
                password
            },
            include: [{
                model: Role
            }]
        })

        if (user) return res.status(200).json({
            user,
            message: 'login success'
        })

        res.status(404).json({
            message: 'Username or password incorrect'
        })
    }catch(err) {
        res.status(400).json({
            message: 'Invalid data'
        })
    }
}

export {
    login
}