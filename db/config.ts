import { Sequelize } from "sequelize";

//const database =  process.env.DATABASE;

//console.log(database);
const db = new Sequelize( 'dbTSCPrueba', 'root', 'stiven310', {
    host: '127.0.0.1',
    dialect: 'mysql',
    //logging: false AQUI no mostraria las sentencia sql
}  );

export default db;