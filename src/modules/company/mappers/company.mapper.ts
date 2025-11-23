import { CompaniesResponseDTO } from '../dtos/response/response-companies.dto';
import { CompanyResponseDTO } from '../dtos/response/response-company.dto';
import { CompanyDocument } from '../models/company.model.interface';

export class CompanyMapper {
  static toDTO(doc: CompanyDocument): CompanyResponseDTO {
    return {
      id: doc._id.toString(),
      name: doc.name,
      sector: doc.sector,
      cnpj: doc.cnpj,
      city: doc.city,
    };
  }

  static toDTOs(docs: CompanyDocument[]): CompaniesResponseDTO {
    return docs.map(this.toDTO);
  }
}
