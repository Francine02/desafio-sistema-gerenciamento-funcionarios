import { EntityAlreadyExistsError } from '../../../shared/errors/entity-already-exists.error';
import { NotFoundError } from '../../../shared/errors/not-found.error';
import { CompanyRepository } from '../../company/repositories/company.interface';
import { CreateEmployeeDTO } from '../dtos/request/create-employee.dto';
import { EmployeeResponseDTO } from '../dtos/response/response-employee.dto';
import { EmployeeRepository } from '../repositories/employee.interface';

export class CreateEmployeeService {
  constructor(
    private readonly employeeRespository: EmployeeRepository,
    private readonly companyRepository: CompanyRepository
  ) {}

  async execute(data: CreateEmployeeDTO): Promise<EmployeeResponseDTO> {
    const companyExists = await this.companyRepository.findById(data.company_id);

    if (!companyExists)
      throw new NotFoundError(
        `Company with id: ${data.company_id} not found when is creating a employee!`
      );

    const existingEmployee = await this.employeeRespository.findByEmail(data.email);

    if (existingEmployee) throw new EntityAlreadyExistsError('Employee already exists!');

    return await this.employeeRespository.create(data);
  }
}
