import { NotFoundError } from '../../../shared/errors/not-found.error';
import { UpdateEmployeeDTO } from '../dtos/request/update-employee.dto';
import { EmployeeResponseDTO } from '../dtos/response/response-employee.dto';
import { EmployeeRepository } from '../repositories/employee.interface';

export class UpdateEmployeeService {
  constructor(private readonly employeeRespository: EmployeeRepository) {}

  async execute(id: string, data: UpdateEmployeeDTO): Promise<EmployeeResponseDTO> {
    const updatedEmployee = await this.employeeRespository.update(id, data);

    if (!updatedEmployee)
      throw new NotFoundError(`Employee with id: ${id} not found when is updating!`);

    return updatedEmployee;
  }
}
