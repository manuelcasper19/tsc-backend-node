import express from 'express';
import router from '../routes/user.routes';
import cors from "cors";

import db from '../db/config';

class Server {
    private app : express.Application;
    private port : string;
    private path = {
        user : '/api/users'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.dbConnection();

        //llamar middelewares
        this.middlewares();
        
        //definir las rutas de la app
        this.routes();

        
    }

    async dbConnection(){
        try {
            await db.authenticate();
            console.log('database online');
        } catch (error) {
            //console.log('could not connect to DB');
            throw new Error("could not connect to DB");
            
        }

    }

    middlewares(){
        //Cors
        this.app.use( cors() );

        //leer lo que viene del body
        this.app.use( express.json() );

        //contenido estatico
        this.app.use( express.static('public') );

    }
    routes(){
        this.app.use( this.path.user, router );
    }

    listen(){
        this.app.listen( this.port, ()=> {
            console.log( 'Server running in the port ', this.port );
        })
    }


}

export default Server;
