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
  user: {
    type: DataTypes.STRING,
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

sequelize.sync();

export default HDUyQuyen;