import { NotFoundError } from '../../../shared/errors/not-found.error';
import { CompanyRepository } from '../repositories/company.interface';

export class DeleteCompanyService {
  constructor(private readonly repository: CompanyRepository) {}

  async execute(id: string): Promise<void> {
    const deleted = await this.repository.delete(id);

    if (!deleted) throw new NotFoundError(`Company with id: ${id} not found when deleting!`);
  }
}
