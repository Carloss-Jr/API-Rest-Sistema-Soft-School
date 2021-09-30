import { Router } from 'express'

import { CompanyController } from './controllers/CompanyController'
import { EmployerController } from './controllers/EmployerController'


const routes = Router()

const companyController = new CompanyController

routes.post('/cadastro', companyController.create)

const employerController = new EmployerController
routes.post('/cadastro-user', employerController.create)

export default routes
