import { EmployeeResponseDTO } from '../dtos/response/response-employee.dto';
import { EmployeesResponseDTO } from '../dtos/response/response-employees.dto';
import { EmployeeDocument } from '../models/employee.interface';

function formatDate(date: Date, includeTime: boolean): string {
  const timeStyle = includeTime ? 'medium' : undefined;

  return Intl.DateTimeFormat('pt-br', {
    dateStyle: 'short',
    timeStyle: timeStyle,
  }).format(date);
}

export class EmployeeMapper {
  static toDTO(doc: EmployeeDocument): EmployeeResponseDTO {
    return {
      company_id: doc.company_id,
      name: doc.name,
      email: doc.email,
      position: doc.position,
      status: doc.status,
      termination_date: doc.termination_date ? formatDate(doc.termination_date, false) : undefined,
      employee_id: doc._id,
      created_at: formatDate(doc.created_at, true),
    };
  }

  static toDTOs(docs: EmployeeDocument[]): EmployeesResponseDTO {
    return docs.map(this.toDTO);
  }
}
