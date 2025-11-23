import { NotFoundError } from '../../../shared/errors/not-found.error';
import { EmployeeRepository } from '../repositories/employee.interface';

export class DeleteEmployeeService {
  constructor(private readonly employeeRespository: EmployeeRepository) {}

  async execute(id: string): Promise<void> {
    const deleted = await this.employeeRespository.delete(id);

    if (!deleted) throw new NotFoundError(`Employee with id: ${id} not found when is deleting!`);
  }
}
