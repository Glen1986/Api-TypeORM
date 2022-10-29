import  { Router, Request, Response }  from "express";

  const router = Router()
  router.get('/',(req:Request, res: Response )=> {
  return res.json({mensaje: 'Bienvenido a nuestra API'})
})
router.get('/users', (req:Request, res: Response )=> {
  return res.json([{ mensaje: 'usuarios'}])
})

export {router}
