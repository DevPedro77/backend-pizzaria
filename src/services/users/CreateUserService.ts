import prismaClient from "../../prisma/index";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  static async CriarUsuario({name,email,password}: UserRequest){
    
    // Verificar o email enviado
    if(!email){
      throw new Error('Email é obrigatório');
    }
    // Verificar se o email já existe
    const userExists = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })

    if(userExists){
      throw new Error('Email já cadastrado');
    }

    // Cadastrar o usuário no banco
    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: password
      },
      select: {
        id: true,
        name: true,
        email: true,
      }
    })


    return user;// Simulação de criação de usuário
  }
}



export default CreateUserService;