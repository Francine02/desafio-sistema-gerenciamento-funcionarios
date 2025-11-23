import z from 'zod';

import {
  DATE_REGEX,
  ID_REGEX,
  NAME_REGEX,
  PASSWORD_REGEX,
} from '../../../shared/constants/regex.constants';
import { EMPLOYEE_STATUS } from '../constants/employee-status.constant';

export const employeeSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must have at least 2 characters')
    .max(120, 'Name cannot exceed 120 characters')
    .regex(NAME_REGEX, 'Name must have only letters'),

  email: z.email('Invalid email format').max(130, 'Email cannot exceed 130 characters'),

  position: z
    .string()
    .trim()
    .min(2, 'Position must have at least 2 characters')
    .max(120, 'Position cannot exceed 120 characters'),

  status: z.enum(EMPLOYEE_STATUS, 'Status must be ACTIVE or INACTIVE').default('ACTIVE'),

  termination_date: z
    .string()
    .regex(DATE_REGEX, 'Date must be in the format YYYY-MM-DD')
    .refine((value) => new Date(value) >= new Date('1900-01-01'), 'Date must be after 1900-01-01')
    .refine((value) => new Date(value) <= new Date(), 'Date cannot be in the future')
    .transform((value) => new Date(value))
    .optional(),

  password: z
    .string()
    .trim()
    .min(8, 'Password must have at least 8 characters')
    .max(64, 'Password cannot exceed 64 characters')
    .regex(PASSWORD_REGEX, 'Password must contain lowercase, uppercase, number and symbol'),

  company_id: z.string().trim().regex(ID_REGEX, {
    message: 'ID of Company must be a valid Mongo ObjectId',
  }),
});

export type EmployeeData = z.infer<typeof employeeSchema>;

export const updateEmployeeSchema = employeeSchema.omit({ company_id: true, email: true }).strict();
