import { Request, Response } from "express"
import { getCustomRepository } from 'typeorm';

import { EmployerRepository } from '../repositories/EmployerRepository'

class EmployerController {
  async create(req: Request, res: Response) {
    const { password_hash, email, cpf, id_company } = req.body

    let data = { password_hash, email, cpf, id_company }

    const repository = getCustomRepository(EmployerRepository)

    data = await repository.save(data)

    return res.status(201).json({ data: data })
  }
}

export { EmployerController }