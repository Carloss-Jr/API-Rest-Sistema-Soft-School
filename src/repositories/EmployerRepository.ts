import { EntityRepository, Repository } from 'typeorm'
import { RegistrationEmployer } from '../entities/registrationEmployer'

@EntityRepository(RegistrationEmployer)

class EmployerRepository extends Repository<RegistrationEmployer> {

}

export { EmployerRepository }