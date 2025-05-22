import {Request, Response} from 'express';
import CreateUserService from '../../services/users/CreateUserService';


class CreateUserController {
  // 
  static async CriarUsuario(req: Request, res: Response) {
    const {name, email, password} = req.body;// Desestruturação do corpo da requisição

    const user = await CreateUserService.CriarUsuario({
      name,
      email,
      password
    });



    return res.json(user);
  }
}


export default CreateUserController;