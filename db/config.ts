import { Sequelize } from "sequelize";

const database  = process.env.DATABASE as string;
const user      = process.env.USER as string;
const password  = process.env.PASSWORD as string;
const server      = process.env.HOST as string;

console.log(database);
const db = new Sequelize( database, user, password, {
    host: server,
    dialect: 'mysql',
    //logging: false AQUI no mostraria las sentencia sql
}  );

export default db;