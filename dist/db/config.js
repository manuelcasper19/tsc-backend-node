"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database = process.env.DATABASE;
const user = process.env.USER;
const password = process.env.PASSWORD;
const server = process.env.HOST;
console.log(database);
const db = new sequelize_1.Sequelize(database, user, password, {
    host: server,
    dialect: 'mysql',
    //logging: false AQUI no mostraria las sentencia sql
});
exports.default = db;
//# sourceMappingURL=config.js.map