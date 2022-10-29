import  { Router, Request, Response }  from "express";
import { CreateUserController } from "./Controllers/CreateUsers.Conrollers";

  const createUserController = new CreateUserController()
  const router = Router()

  router.get('/',(req:Request, res: Response )=> {
  return res.json({mensaje: 'Bienvenido a nuestra API'})
})
router.get('/users', createUserController.handle)

export {router}
