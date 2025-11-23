import z from 'zod';

import { updateEmployeeSchema } from '../../schemas/employee.schema';

export type UpdateEmployeeDTO = z.infer<typeof updateEmployeeSchema>;
