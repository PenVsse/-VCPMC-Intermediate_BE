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
    Admin: {
        type: DataTypes.STRING
    },
    used: {
        type: DataTypes.INTEGER
    },
    device: {
        type: DataTypes.INTEGER
    },
    hsd: {
        type: DataTypes.DATE
    },
    status: {
        type: DataTypes.INTEGER
    }
})

await sequelize.sync();

export default UnitsUsed;
