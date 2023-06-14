import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

const LichSuDoiSoat = sequelize.define('LichSuDoiSoat',{
    id: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    from: {
        type: DataTypes.DATE
    },
    to: {
        type: DataTypes.DATE
    },
    typeHD: {
        type: DataTypes.STRING
    },
    total: {
        type: DataTypes.INTEGER
    },
    revenue: {
        type: DataTypes.INTEGER
    },
    unRevenue: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    day: {
        type: DataTypes.DATE
    }
})

await sequelize.sync();

export default LichSuDoiSoat;
