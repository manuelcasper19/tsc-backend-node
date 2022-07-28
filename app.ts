import  'dotenv/config';
import Server from './model/server';


//dotenv.config();

const server = new Server();

server.listen();