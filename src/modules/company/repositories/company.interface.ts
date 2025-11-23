import { CreateCompanyDTO } from '../dtos/request/create-company.dto';
import { UpdateCompanyDTO } from '../dtos/request/update-company.dto';
import { CompaniesResponseDTO } from '../dtos/response/response-companies.dto';
import { CompanyResponseDTO } from '../dtos/response/response-company.dto';

export interface CompanyRepository {
  findById(id: string): Promise<CompanyResponseDTO | null>;
  findAll(): Promise<CompaniesResponseDTO>;
  findByCnpj(cnpj: string): Promise<CompanyResponseDTO | null>;
  create(data: CreateCompanyDTO): Promise<CompanyResponseDTO>;
  update(id: string, data: UpdateCompanyDTO): Promise<CompanyResponseDTO | null>;
  delete(id: string): Promise<boolean>;
}
