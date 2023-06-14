import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";
import User from "./User";

const HDUyQuyen = sequelize.define("HDUyQuyen", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },
  ownership: {
    type: DataTypes.INTEGER,
    defaultValue: 2
  },
  effect: {
    type: DataTypes.INTEGER,
    defaultValue: 3
  }
});

HDUyQuyen.sync();

export default Role;
