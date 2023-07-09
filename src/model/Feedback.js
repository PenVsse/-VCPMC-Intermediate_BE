import { sequelize } from "../config/database";
import { DataTypes } from "sequelize";

const Feedback = sequelize.define("Feedback", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user: {
        type: DataTypes.STRING,
    },
    topicId: {
        type: DataTypes.INTEGER,
    },
    desc: {
        type: DataTypes.STRING,
    },
});

await sequelize.sync();

export default Feedback;