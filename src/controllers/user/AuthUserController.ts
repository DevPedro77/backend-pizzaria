import {Request, Response} from 'express'; 
import  AuthUserService  from '../../services/users/AuthUserService';


class AuthUserController {
  static async LoginUser(req: Request, res: Response) {
    const {email, password} = req.body;

    const authUserService = await AuthUserService.LogandoUsuario({
      email,
      password
    })

    // Simulação de resposta
    return res.json(authUserService);
  }
}


export default AuthUserController;