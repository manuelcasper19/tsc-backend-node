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
exports.deleteeUser = exports.updateUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const usuario_1 = __importDefault(require("../model/usuario"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield usuario_1.default.findAll();
    return res.status(201).json({
        msg: 'Peticion get',
        usuario
    });
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (usuario) {
        return res.status(201).json({
            msg: 'Peticion get id',
            usuario
        });
    }
    else {
        return res.status(401).json({
            msg: 'no exite usuario con el id ' + id
        });
    }
});
exports.getUser = getUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeEmail = yield usuario_1.default.findOne({
            where: {
                Email: body.Email
            }
        });
        if (existeEmail) {
            return res.status(401).json({
                msg: 'el email ya existe',
            });
        }
        const usuario = yield usuario_1.default.create(body);
        return res.status(201).json({
            msg: 'User created succesfull',
            usuario
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error, hable con el administrador',
        });
    }
});
exports.postUser = postUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const usuario = yield usuario_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: 'no existe el usuario con ese id, revise',
            });
        }
        yield usuario.update(body);
        return res.status(201).json({
            msg: 'user updated successfully',
            usuario
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error, hable con el administrador',
        });
    }
});
exports.updateUser = updateUser;
const deleteeUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const usuario = yield usuario_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: 'no existe el usuario con ese id, revise',
            });
        }
        //await usuario.destroy();
        yield usuario.update({ Estado: false });
        return res.status(201).json({
            msg: 'user deleted successfully',
            usuario
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error, hable con el administrador',
        });
    }
});
exports.deleteeUser = deleteeUser;
//# sourceMappingURL=usuario.controller.js.map