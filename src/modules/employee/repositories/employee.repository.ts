import { CreateEmployeeDTO } from '../dtos/request/create-employee.dto';
import { UpdateEmployeeDTO } from '../dtos/request/update-employee.dto';
import { EmployeeResponseDTO } from '../dtos/response/response-employee.dto';
import { EmployeesResponseDTO } from '../dtos/response/response-employees.dto';
import { EmployeeMapper } from '../mappers/employee.mapper';
import { EmployeeModel } from '../models/employee.model';
import { EmployeeRepository } from './employee.interface';

export class MongoEmployeeRepository implements EmployeeRepository {
  async findAll(): Promise<EmployeesResponseDTO> {
    const docs = await EmployeeModel.find();
    return EmployeeMapper.toDTOs(docs);
  }

  async create(data: CreateEmployeeDTO): Promise<EmployeeResponseDTO> {
    const doc = await EmployeeModel.create(data);
    return EmployeeMapper.toDTO(doc);
  }

  async update(id: string, data: UpdateEmployeeDTO): Promise<EmployeeResponseDTO | null> {
    const doc = await EmployeeModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    return doc ? EmployeeMapper.toDTO(doc) : null;
  }

  async delete(id: string): Promise<boolean> {
    const result = await EmployeeModel.findByIdAndDelete(id);
    return result !== null;
  }

  async findByEmail(email: string): Promise<EmployeeResponseDTO | null> {
    const doc = await EmployeeModel.findOne({ email });
    return doc ? EmployeeMapper.toDTO(doc) : null;
  }

  async findByCompanyId(id: string): Promise<EmployeesResponseDTO> {
    const docs = await EmployeeModel.find({ company_id: id });
    return EmployeeMapper.toDTOs(docs);
  }
}
