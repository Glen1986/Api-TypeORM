import { Request, Response } from 'express'
import { CreateUserService } from '../services/CreateUserService'

class CreateUserController {
  handle(req: Request, res: Response){
    const createUserServcice = new CreateUserService();
    
    const name = req.body.name
    const email= req.body.email
    const password =  req.body.password

    if(name.length === 0 || email.length === 0){
      return res.status(400).json({mensaje:"informe todos los campos"})
    }
    if(password.length === 0){
      return res.status(400).json({mensaje:"contraseña no informada"})
    }
    const user = createUserServcice.execute({name, email, password})
    console.log({user})
    return res.json({user})
    }
}
export { CreateUserController };
