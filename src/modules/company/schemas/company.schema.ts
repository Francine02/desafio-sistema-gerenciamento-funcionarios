import z from 'zod';

import { CNPJ_REGEX, NAME_REGEX } from '../../../shared/constants/regex.constants';

export const companySchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, 'Name must have at least 3 characters')
    .max(100, 'Name cannot exceed 100 characters')
    .regex(NAME_REGEX, 'Name must have only letters'),

  sector: z
    .string()
    .trim()
    .min(2, 'Sector must have at least 3 characters')
    .max(200, 'Sector cannot exceed 200 characters')
    .regex(NAME_REGEX, 'Sector must have only letters'),

  cnpj: z
    .string()
    .trim()
    .regex(CNPJ_REGEX, { message: 'CNPJ must contain exactly 14 digits and only numbers' }),

  city: z.string().trim().min(2, 'City is required').max(100, 'City cannot exceed 100 characters'),
});

export type CompanyData = z.infer<typeof companySchema>;

export const updateCompanySchema = companySchema.omit({ cnpj: true }).strict();
