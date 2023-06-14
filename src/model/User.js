import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";
import Role from "./Role";

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  dob: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING
  },
  roleId: {
    type: DataTypes.INTEGER,
    defaultValue: 2,
    references: {
      model: Role,
      key: "id",
    },
  },
});

await sequelize.sync();

export default User;
