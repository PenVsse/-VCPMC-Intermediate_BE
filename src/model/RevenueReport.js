import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

const RevenueReport = sequelize.define('RevenueReport',{
    id: {
        type: DataTypes.STRING,
        primaryKey: true
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
    numberDevice: {
        type: DataTypes.STRING
    },
    total: {
        type: DataTypes.INTEGER
    },
    day: {
        type: DataTypes.DATE
    }
})

await sequelize.sync();

export default RevenueReport;
