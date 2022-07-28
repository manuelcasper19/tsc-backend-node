import { DataTypes } from "sequelize";
import db from "../db/config";

const user = db.define('tbluser', {
    Nombre: {
        type: DataTypes.STRING
    },
    Email: {
        type: DataTypes.STRING
    },
    Estado: {
        type: DataTypes.BOOLEAN
    }
});

export default  user;