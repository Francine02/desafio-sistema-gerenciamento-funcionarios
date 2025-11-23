import { EntityAlreadyExistsError } from '../../../shared/errors/entity-already-exists.error';
import { CreateCompanyDTO } from '../dtos/request/create-company.dto';
import { CompanyResponseDTO } from '../dtos/response/response-company.dto';
import { CompanyRepository } from '../repositories/company.interface';

export class CreateCompanyService {
  constructor(private readonly repository: CompanyRepository) {}

  async execute(data: CreateCompanyDTO): Promise<CompanyResponseDTO> {
    const existingCompany = await this.repository.findByCnpj(data.cnpj);

    if (existingCompany) throw new EntityAlreadyExistsError('Company already exists!');

    return await this.repository.create(data);
  }
}
