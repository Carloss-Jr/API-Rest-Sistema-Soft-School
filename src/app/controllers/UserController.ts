import { Request, Response } from "express"
import { getCustomRepository } from 'typeorm';

import { UserRepository } from '../repositories/UserRepository'

class UserController {
  async create(req: Request, res: Response) {
    const { name, email, password_hash, company } = req.body

    const repository = getCustomRepository(UserRepository)

    let user = { name, email, password_hash, company }

    const userExists = await repository.findOne({
      where: { email: req.body.email }
    })

    if (userExists) {
      return res.status(400).json({ error: 'Email ja utilizado' })
    }

    user = await repository.save(user)

    return res.json({ msg: "Usuário " + user.name + ", " + user.email + " criado com sucesso" })
  }

  async update(req: Request, res: Response) {
    const { id } = req.params
    const { name, password_hash } = req.body

    const user = { name, password_hash }

    const repository = getCustomRepository(UserRepository)

    await repository.update(id, user)
    return res.status(200).json({ msg: "Cliente alterado com sucesso " + user.name })
  }

  async signin(req: Request, res: Response) {

    const { id } = req.params
    const repository = getCustomRepository(UserRepository)
    const data = await repository.findOne(id)

    return res.status(200).json({ data: data })

  }
  async delete(req: Request, res: Response) {
    const { id } = req.params
    const repository = getCustomRepository(UserRepository)
    await repository.delete(id)

    return res.status(200).json({ msg: "Registro deletado" + id })
  }
}

export { UserController }