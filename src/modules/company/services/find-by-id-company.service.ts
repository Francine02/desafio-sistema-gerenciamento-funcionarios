import { NotFoundError } from '../../../shared/errors/not-found.error';
import { CompanyResponseDTO } from '../dtos/response/response-company.dto';
import { CompanyRepository } from '../repositories/company.interface';

export class FindByIdCompanyService {
  constructor(private readonly repository: CompanyRepository) {}

  async execute(id: string): Promise<CompanyResponseDTO> {
    const company = await this.repository.findById(id);

    if (!company) throw new NotFoundError(`Company with id: ${id} not found when searching!`);

    return company;
  }
}
