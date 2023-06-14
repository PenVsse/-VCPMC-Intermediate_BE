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
  userId: {
    type: DataTypes.INTEGER,
    references: {
        model: User,
        key: "id"
    }
  }
})

await sequelize.sync();

export default Playlist;
