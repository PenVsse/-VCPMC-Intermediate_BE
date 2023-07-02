import { sequelize } from "../config/database";
import { DataTypes } from "sequelize";

const Device = sequelize.define('Device', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.INTEGER
    },
    address: {
        type: DataTypes.STRING
    },
    hsd: {
        type: DataTypes.DATE
    },
    mac: {
        type: DataTypes.STRING
    },
    memory: {
        type: DataTypes.DOUBLE
    },
    sku: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING
    }
})

await sequelize.sync();

export default Device;