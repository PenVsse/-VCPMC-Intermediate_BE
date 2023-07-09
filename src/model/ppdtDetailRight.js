import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

const PPDTDetailRight = sequelize.define('PPDTDetailRight', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    luotPhat: {
        type: DataTypes.INTEGER
    },
    doanhThu: {
        type: DataTypes.STRING
    }
})

await sequelize.sync();

export default PPDTDetailRight;