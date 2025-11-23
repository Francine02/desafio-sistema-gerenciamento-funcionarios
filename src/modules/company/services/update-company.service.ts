import { NotFoundError } from '../../../shared/errors/not-found.error';
import { UpdateCompanyDTO } from '../dtos/request/update-company.dto';
import { CompanyResponseDTO } from '../dtos/response/response-company.dto';
import { CompanyRepository } from '../repositories/company.interface';

export class UpdateCompanyService {
  constructor(private readonly repository: CompanyRepository) {}

  async execute(id: string, data: UpdateCompanyDTO): Promise<CompanyResponseDTO> {
    const updatedCompany = await this.repository.update(id, data);

    if (!updatedCompany) {
      throw new NotFoundError(`Company with id: ${id} not found when updating!`);
    }

    return updatedCompany;
  }
}
