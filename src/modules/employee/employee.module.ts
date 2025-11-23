import { MongoCompanyRepository } from '../company/repositories/company.repository';
import { MongoEmployeeRepository } from './repositories/employee.repository';
import { CreateEmployeeService } from './services/create-employee.service';
import { DeleteEmployeeService } from './services/delete-employee.service';
import { EmployeeServices } from './services/employee-services.interface';
import { FindAllEmployeesService } from './services/find-all-employees.service';
import { FindEmployeesByCompanyService } from './services/find-employees-by-company.service';
import { UpdateEmployeeService } from './services/update-employee.service';

const employeeRepository = new MongoEmployeeRepository();
const companyRepository = new MongoCompanyRepository();

export const employeeServices: EmployeeServices = {
  create: new CreateEmployeeService(employeeRepository, companyRepository),
  delete: new DeleteEmployeeService(employeeRepository),
  findAll: new FindAllEmployeesService(employeeRepository),
  findByCompanyId: new FindEmployeesByCompanyService(companyRepository, employeeRepository),
  update: new UpdateEmployeeService(employeeRepository),
};
