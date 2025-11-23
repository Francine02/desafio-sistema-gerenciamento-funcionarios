import { MongoCompanyRepository } from './repositories/company.repository';
import { CompanyServices } from './services/company-services.interface';
import { CreateCompanyService } from './services/create-company.service';
import { DeleteCompanyService } from './services/delete-company.service';
import { FindAllCompaniesService } from './services/find-all-companies.service';
import { FindByIdCompanyService } from './services/find-by-id-company.service';
import { UpdateCompanyService } from './services/update-company.service';

const companyRepository = new MongoCompanyRepository();

export const companyServices: CompanyServices = {
  create: new CreateCompanyService(companyRepository),
  delete: new DeleteCompanyService(companyRepository),
  findAll: new FindAllCompaniesService(companyRepository),
  findById: new FindByIdCompanyService(companyRepository),
  update: new UpdateCompanyService(companyRepository),
};
