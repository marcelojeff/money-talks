import { Sequelize } from "sequelize";
import db from "../db.js";

export default db.define("client", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  }
});