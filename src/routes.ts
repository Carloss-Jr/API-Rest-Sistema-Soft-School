import { Router } from 'express'
import { UserController } from "@controllers/UserController"



const routes = Router()

const userController = new UserController
routes.post('/register', userController.create)
routes.put('/update/:id', userController.update)
routes.get('/session/:id', userController.signin)
routes.delete('/removeuser/:id', userController.delete)

export default routes
