import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

const PPDTDetailLeft = sequelize.define('PPDTDetailLeft', {
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
    },
    hanhChinhPhi: {
        type: DataTypes.STRING
    },
    nhuanBut: {
        type: DataTypes.STRING
    }
})

await sequelize.sync();

export default PPDTDetailLeft;