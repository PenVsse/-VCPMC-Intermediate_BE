import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

const LichSuDoiSoat = sequelize.define('LichSuDoiSoat', {
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
    tongLuotPhat: {
        type: DataTypes.INTEGER
    },
    tongDoanhThu: {
        type: DataTypes.STRING
    },
    dtChuaPhanPhoi: {
        type: DataTypes.STRING,
        allowNull: true
    },
    day: {
        type: DataTypes.DATE
    }
})

await sequelize.sync();

export default LichSuDoiSoat;