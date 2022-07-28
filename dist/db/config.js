"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//const database =  process.env.DATABASE;
//console.log(database);
const db = new sequelize_1.Sequelize('dbTSCPrueba', 'root', 'stiven310', {
    host: '127.0.0.1',
    dialect: 'mysql',
    //logging: false AQUI no mostraria las sentencia sql
});
exports.default = db;
//# sourceMappingURL=config.js.map