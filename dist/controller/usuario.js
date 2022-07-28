"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteeUser = exports.updateUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const getUsers = (req, res) => {
    return res.status(201).json({
        msg: 'Peticion get'
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.body;
    return res.status(201).json({
        msg: 'Peticion get id',
        id
    });
};
exports.getUser = getUser;
const postUser = (req, res) => {
    const { body } = req;
    return res.status(201).json({
        msg: 'Peticion post',
        body
    });
};
exports.postUser = postUser;
const updateUser = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    return res.status(201).json({
        msg: 'Peticion update',
        id,
        body
    });
};
exports.updateUser = updateUser;
const deleteeUser = (req, res) => {
    const { id } = req.params;
    return res.status(201).json({
        msg: 'Peticion delete',
        id
    });
};
exports.deleteeUser = deleteeUser;
//# sourceMappingURL=usuario.js.map