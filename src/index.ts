import express from 'express'
import { router } from './routes';


const server = express();
server.use(router)

server.listen(4000,()=>{
  console.log('api en la puerta 4000')
})
console.log('typescript')
