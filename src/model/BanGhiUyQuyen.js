import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

const BanGhiUyQuyen = sequelize.define("BanGhiUyQuyen", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  singer: {
    type: DataTypes.STRING,
  },
  author: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.DATE
  },
  status: {
    type: DataTypes.INTEGER
  }
});

await sequelize.sync();

export default BanGhiUyQuyen;
