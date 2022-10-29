import express from 'express'
import { Request, Response, NextFunction } from 'express'


const server = express();

server.get('/',(req:Request, res: Response, next: NextFunction)=> {
  return res.json({mensaje: 'Bienvenido a nuestra API'})

})
server.listen(4000,()=>{
  console.log('api en la puerta 4000')
})
console.log('typescript')
