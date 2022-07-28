"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("../routes/user.routes"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("../db/config"));
class Server {
    constructor() {
        this.path = {
            user: '/api/users'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.dbConnection();
        //llamar middelewares
        this.middlewares();
        //definir las rutas de la app
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield config_1.default.authenticate();
                console.log('database online');
            }
            catch (error) {
                //console.log('could not connect to DB');
                throw new Error("could not connect to DB");
            }
        });
    }
    middlewares() {
        //Cors
        this.app.use((0, cors_1.default)());
        //leer lo que viene del body
        this.app.use(express_1.default.json());
        //contenido estatico
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.path.user, user_routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running in the port ', this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map