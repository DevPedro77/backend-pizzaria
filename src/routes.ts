import {Request, Response, Router} from 'express';
import CreateUserController from './controllers/user/CreateUserController';
import AuthUserController from './controllers/user/AuthUserController';

const router = Router();

router.post('/users', CreateUserController.CriarUsuario);
// rota de login
router.post('/login', AuthUserController.LoginUser);

export {router};