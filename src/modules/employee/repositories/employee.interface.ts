import { CreateEmployeeDTO } from '../dtos/request/create-employee.dto';
import { UpdateEmployeeDTO } from '../dtos/request/update-employee.dto';
import { EmployeeResponseDTO } from '../dtos/response/response-employee.dto';
import { EmployeesResponseDTO } from '../dtos/response/response-employees.dto';

export interface EmployeeRepository {
  findAll(): Promise<EmployeesResponseDTO>;
  create(data: CreateEmployeeDTO): Promise<EmployeeResponseDTO>;
  update(id: string, data: UpdateEmployeeDTO): Promise<EmployeeResponseDTO | null>;
  delete(id: string): Promise<boolean>;
  findByEmail(email: string): Promise<EmployeeResponseDTO | null>;
  findByCompanyId(id: string): Promise<EmployeesResponseDTO>;
}
