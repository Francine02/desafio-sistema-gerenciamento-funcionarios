import { Company } from '../../models/company.model.interface';

export type CompanyResponseDTO = Company & {
  id: string;
};
