
import { Request, Response } from "express"
import { getCustomRepository } from 'typeorm';

import { CompanyRepository } from '../repositories/CompanyRepository'

class CompanyController {
  async create(req: Request, res: Response) {
    const { password_hash, email, cnpj, employersId, } = req.body
    let { is_company } = req.params
    is_company = "false"
    let data = { password_hash, email, cnpj, employersId }

    const repository = getCustomRepository(CompanyRepository)

    data = await repository.save(data)

    return res.status(201).json({ data: data })
  }

  async createemployer(req: Request, res: Response) {

    const { id } = req.params
    const { password_hash, email, cpf, id_company } = req.body

    const repository = getCustomRepository(CompanyRepository)
    let data = { password_hash, email, cpf, id_company }
    data = await repository.save(data)

    return res.status(201).json({ data: data })
  }
}

export { CompanyController }