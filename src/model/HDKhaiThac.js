import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";
import User from "./User";

const HDKhaiThac = sequelize.define("HDKhaiThac", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  customer: {
    type: DataTypes.STRING,
  },
  user: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.INTEGER,
  }
});

sequelize.sync();

export default HDKhaiThac;
