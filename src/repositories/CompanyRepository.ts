import { EntityRepository, Repository } from 'typeorm'
import { RegistrationCompany } from '../entities/registrationCompany';

@EntityRepository(RegistrationCompany)

class CompanyRepository extends Repository<RegistrationCompany> {

}

export { CompanyRepository }