import { Request, Response } from "express"

export class CreateUserController{
  handle (req:Request, res: Response ) {
    return res.json([{ mensaje: 'usuarios'}])
  }
}
