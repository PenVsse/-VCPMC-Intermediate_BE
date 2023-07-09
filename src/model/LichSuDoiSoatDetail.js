import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

const LichSuDoiSoatDetail = sequelize.define('LichSuDoiSoatDetail', {
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
    bieuDien: {
        type: DataTypes.STRING
    },
    sanXuat: {
        type: DataTypes.STRING
    },
    vcpmc: {
        type: DataTypes.STRING
    }
})

await sequelize.sync();

export default LichSuDoiSoatDetail;