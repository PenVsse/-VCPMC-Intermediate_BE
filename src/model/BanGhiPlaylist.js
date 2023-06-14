import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";
import BanGhi from "./BanGhi";
import Playlist from "./Playlist";

const BanGhiPlaylist = sequelize.define("BanGhiPlaylist", {
  banGhiId: {
    type: DataTypes.INTEGER,
    references: {
        model: BanGhi,
        key: 'id'
    }
  },
  playlistId: {
    type: DataTypes.INTEGER,
    references: {
        model: Playlist,
        key: 'id'
    }
  }
});

await sequelize.sync();

export default BanGhiPlaylist;
