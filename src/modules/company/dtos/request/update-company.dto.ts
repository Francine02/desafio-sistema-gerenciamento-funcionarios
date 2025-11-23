import z from 'zod';

import { updateCompanySchema } from '../../schemas/company.schema';

export type UpdateCompanyDTO = z.infer<typeof updateCompanySchema>;
