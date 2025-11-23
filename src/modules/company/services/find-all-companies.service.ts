import { CompaniesResponseDTO } from '../dtos/response/response-companies.dto';
import { CompanyRepository } from '../repositories/company.interface';

export class FindAllCompaniesService {
  constructor(private readonly repository: CompanyRepository) {}

  async execute(): Promise<CompaniesResponseDTO> {
    return await this.repository.findAll();
  }
}
