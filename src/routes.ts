import {Request, Response, Router} from 'express';
import CreateUserController from './controllers/user/CreateUserController';

const router = Router();

router.post('/users', CreateUserController.CriarUsuario);

export {router};