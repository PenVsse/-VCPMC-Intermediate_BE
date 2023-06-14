import { sequelize } from "../config/database";
import { DataTypes } from "sequelize";

const Schedule = sequelize.define('Schedule', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    from: {
        type: DataTypes.DATE
    },
    to: {
        type: DataTypes.DATE
    }
})

await sequelize.sync();

export default Schedule;
