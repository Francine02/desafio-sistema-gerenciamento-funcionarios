import { NotFoundError } from '../../../shared/errors/not-found.error';
import { CompanyRepository } from '../../company/repositories/company.interface';
import { EmployeesResponseDTO } from '../dtos/response/response-employees.dto';
import { EmployeeRepository } from '../repositories/employee.interface';

export class FindEmployeesByCompanyService {
  constructor(
    private readonly companyRepository: CompanyRepository,
    private readonly employeeRepository: EmployeeRepository
  ) {}

  async execute(id: string): Promise<EmployeesResponseDTO> {
    const company = await this.companyRepository.findById(id);

    if (!company) throw new NotFoundError(`Company with id: ${id} not found when searching!`);

    return await this.employeeRepository.findByCompanyId(id);
  }
}
