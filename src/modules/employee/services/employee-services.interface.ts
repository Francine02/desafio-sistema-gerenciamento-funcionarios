import { CreateEmployeeService } from './create-employee.service';
import { DeleteEmployeeService } from './delete-employee.service';
import { FindAllEmployeesService } from './find-all-employees.service';
import { FindEmployeesByCompanyService } from './find-employees-by-company.service';
import { UpdateEmployeeService } from './update-employee.service';

export interface EmployeeServices {
  create: CreateEmployeeService;
  delete: DeleteEmployeeService;
  findAll: FindAllEmployeesService;
  findByCompanyId: FindEmployeesByCompanyService;
  update: UpdateEmployeeService;
}
