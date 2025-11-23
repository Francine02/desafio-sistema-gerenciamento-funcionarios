import { CreateCompanyDTO } from '../dtos/request/create-company.dto';
import { UpdateCompanyDTO } from '../dtos/request/update-company.dto';
import { CompaniesResponseDTO } from '../dtos/response/response-companies.dto';
import { CompanyResponseDTO } from '../dtos/response/response-company.dto';
import { CompanyMapper } from '../mappers/company.mapper';
import { CompanyModel } from '../models/company.model';
import { CompanyRepository } from './company.interface';

export class MongoCompanyRepository implements CompanyRepository {
  async findById(id: string): Promise<CompanyResponseDTO | null> {
    const doc = await CompanyModel.findById(id);
    return doc ? CompanyMapper.toDTO(doc) : null;
  }

  async findAll(): Promise<CompaniesResponseDTO> {
    const docs = await CompanyModel.find();
    return CompanyMapper.toDTOs(docs);
  }

  async findByCnpj(cnpj: string): Promise<CompanyResponseDTO | null> {
    const doc = await CompanyModel.findOne({ cnpj });
    return doc ? CompanyMapper.toDTO(doc) : null;
  }

  async create(data: CreateCompanyDTO): Promise<CompanyResponseDTO> {
    const doc = await CompanyModel.create(data);
    return CompanyMapper.toDTO(doc);
  }

  async update(id: string, data: UpdateCompanyDTO): Promise<CompanyResponseDTO | null> {
    const doc = await CompanyModel.findByIdAndUpdate(id, data, { new: true });
    return doc ? CompanyMapper.toDTO(doc) : null;
  }

  async delete(id: string): Promise<boolean> {
    const result = await CompanyModel.findByIdAndDelete(id);
    return result != null;
  }
}
