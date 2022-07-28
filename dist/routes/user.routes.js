"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = require("../controller/usuario.controller");
const router = (0, express_1.Router)();
router.get('/', usuario_controller_1.getUsers);
router.get('/:id', usuario_controller_1.getUser);
router.post('/', usuario_controller_1.postUser);
router.put('/:id', usuario_controller_1.updateUser);
router.delete('/:id', usuario_controller_1.deleteeUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map