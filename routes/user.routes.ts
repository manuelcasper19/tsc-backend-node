import { Router } from 'express';

import { deleteeUser, getUser, getUsers, postUser, updateUser } from '../controller/usuario.controller';
const router = Router();


router.get('/',         getUsers);
router.get('/:id',      getUser);
router.post('/',        postUser);
router.put('/:id',      updateUser);
router.delete('/:id',   deleteeUser);


export default router;
