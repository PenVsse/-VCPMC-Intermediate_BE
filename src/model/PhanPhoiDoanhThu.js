import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

const PhanPhoiDoanhThu = sequelize.define('PhanPhoiDoanhThu',{
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    user: {
        type: DataTypes.STRING
    },
    songs: {
        type: DataTypes.INTEGER
    },
    doanhThu: {
        type: DataTypes.STRING
    },
    phi: {
        type: DataTypes.STRING
    },
    nhuanBut: {
        type: DataTypes.STRING
    }
})

await sequelize.sync();

export default PhanPhoiDoanhThu;
