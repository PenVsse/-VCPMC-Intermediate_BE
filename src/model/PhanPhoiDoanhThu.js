import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

const PhanPhoiDoanhThu = sequelize.define('PhanPhoiDoanhThu',{
    id: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    songs: {
        type: DataTypes.INTEGER
    },
    money: {
        type: DataTypes.INTEGER
    },
    vat: {
        type: DataTypes.INTEGER
    },
    royalties: {
        type: DataTypes.INTEGER
    },
    day: {
        type: DataTypes.DATE,
        allowNull: true
    }
})

await sequelize.sync();

export default PhanPhoiDoanhThu;
