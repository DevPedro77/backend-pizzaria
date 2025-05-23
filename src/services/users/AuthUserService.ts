import prismaClient from "../../prisma/index";
import { compare } from "bcryptjs";
import {sign} from "jsonwebtoken";


interface AuthUserRequest {
  email: string;
  password: string;
}

class AuthUserService {
  static async LogandoUsuario({email, password}: AuthUserRequest){
    // Verificar se o email existe
    const userExists = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })

    if(!userExists){
      throw new Error('Email não cadastrado');
      // navegue para pagina de cadastro
    }

    // Verificar se a senha está correta
    const passwordMatch = await compare(password, userExists.password)

    if(!passwordMatch){
      throw new Error('Senha incorreta');
      // navegue para pagina de login
    }

    // Se tudo estiver correto, lvamos gerar o token para o usuário
    const token = sign(
      {
        name: userExists.name,
        email: userExists.email,
      },
      process.env.JWT_KEY as string,
      {
        subject: userExists.id,
        expiresIn: '30d'
      },
    )


    return {
      id: userExists.id,
      name: userExists.name,
      email: userExists.email,
      token: token,
    };
  }
}


export default AuthUserService;