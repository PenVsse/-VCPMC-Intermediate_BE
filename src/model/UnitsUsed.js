import { sequelize } from "../config/database";
import { DataTypes } from "sequelize";

const UnitsUsed = sequelize.define('UnitsUsed', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    admin: {
        type: DataTypes.STRING
    },
    user: {
        type: DataTypes.INTEGER
    },
    device: {
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.INTEGER
    }
})

await sequelize.sync();

export default UnitsUsed;
