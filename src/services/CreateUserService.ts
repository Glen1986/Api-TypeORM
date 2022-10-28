interface IUser{
  name: string,
  email: string,
  password: string
}

class CreateUserService {
 execute({name, email, password}:IUser){
   const data = []
   data.push({name, email, password})
   return data
  }
}

export {CreateUserService};
