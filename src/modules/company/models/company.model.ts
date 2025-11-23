import { model, Schema } from 'mongoose';

import { CompanyDocument } from './company.model.interface';

const companyMongooseSchema = new Schema<CompanyDocument>({
  name: { type: String, required: true },
  sector: { type: String, required: true },
  cnpj: { type: String, required: true, unique: true },
  city: { type: String, required: true },
});

export const CompanyModel = model<CompanyDocument>('Company', companyMongooseSchema);
