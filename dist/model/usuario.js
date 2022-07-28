"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../db/config"));
const user = config_1.default.define('tbluser', {
    Nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    Email: {
        type: sequelize_1.DataTypes.STRING
    },
    Estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
});
exports.default = user;
//# sourceMappingURL=usuario.js.map