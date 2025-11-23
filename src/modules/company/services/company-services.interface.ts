import { CreateCompanyService } from './create-company.service';
import { DeleteCompanyService } from './delete-company.service';
import { FindAllCompaniesService } from './find-all-companies.service';
import { FindByIdCompanyService } from './find-by-id-company.service';
import { UpdateCompanyService } from './update-company.service';

export interface CompanyServices {
  create: CreateCompanyService;
  delete: DeleteCompanyService;
  findAll: FindAllCompaniesService;
  findById: FindByIdCompanyService;
  update: UpdateCompanyService;
}
