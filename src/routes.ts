import {Router, Request, Response} from "express";
import { CreateUserController } from "./controllers/CreateUser.Controller";


const router = Router()

const CreateUser = new CreateUserController();

  router.get('/',(req: Request, res: Response)=>{
    return res.json({mensaje:'API '})
  })

  router.get('/api',(req: Request, res: Response)=>{
    return res.json({mensaje:'API e la puerta 4000'})
  })

  router.post('/users',CreateUser.handle)

export {router}
