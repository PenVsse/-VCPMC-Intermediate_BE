import { sequelize } from "../config/database";
import { DataTypes } from "sequelize";

const Partner = sequelize.define('Partner',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    hsd: {
        type: DataTypes.DATE
    },
    phone: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.INTEGER
    }
})

await sequelize.sync();

export default Partner;
