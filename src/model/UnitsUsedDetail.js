import { sequelize } from "../config/database";
import { DataTypes } from "sequelize";

const UnitsUsedDetail = sequelize.define('UnitsUsedDetail', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.INTEGER
    }
})

await sequelize.sync();

export default UnitsUsedDetail;
