import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

const BanGhi = sequelize.define("BanGhi", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  time: {
    type: DataTypes.STRING,
  },
  singer: {
    type: DataTypes.STRING,
  },
  author: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.INTEGER
  },
  format: {
    type: DataTypes.INTEGER
  },
  picture: {
    type: DataTypes.STRING
  },
  hsd: {
    type: DataTypes.INTEGER
  }
});

await sequelize.sync();

export default BanGhi;
