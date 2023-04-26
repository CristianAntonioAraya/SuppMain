import { Router } from 'express';
import {
    createNewUser,
    getUser,
    deleteUser,
    updateUser,
    getAllUsers,
} from '../controller/usersController.js';
import {
    createUserSchema,
    getUserSchema,
    updateUserSchema,
} from '../schemas/userSchema.js';
import validateHandler from '../middleware/validateFieldHandler.js';

const router = Router();

router.get('/', getAllUsers);

router.post('/', validateHandler(createUserSchema, 'body'), createNewUser);

router.get('/:id', validateHandler(getUserSchema, 'params'), getUser);

router.delete('/:id', validateHandler(getUserSchema, 'params'), deleteUser);

router.put(
    '/:id',
    validateHandler(getUserSchema, 'params'),
    validateHandler(updateUserSchema, 'body'),
    updateUser
);

export default router;
