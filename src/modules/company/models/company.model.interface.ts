import { Document } from 'mongoose';

export interface Company {
  name: string;
  sector: string;
  cnpj: string;
  city: string;
}

export type CompanyDocument = Company & Document;
