interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  static async CriarUsuario({name,email,password}: UserRequest){
    return {name: name, email: email, password: password};// Simulação de criação de usuário
  }
}



export default CreateUserService;