import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";
import User from "./User";

const Playlist = sequelize.define("Playlist", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING
  },
  topics: {
    type: DataTypes.STRING
  },
  creater: {
    type: DataTypes.STRING
  }
})

await sequelize.sync();

export default Playlist;