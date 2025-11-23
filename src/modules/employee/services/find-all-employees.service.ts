import { EmployeesResponseDTO } from '../dtos/response/response-employees.dto';
import { EmployeeRepository } from '../repositories/employee.interface';

export class FindAllEmployeesService {
  constructor(private readonly employeeRespository: EmployeeRepository) {}

  async execute(): Promise<EmployeesResponseDTO> {
    return await this.employeeRespository.findAll();
  }
}
