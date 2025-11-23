export const EMPLOYEE_STATUS = ['ACTIVE', 'INACTIVE'] as const;

export type EmployeeStatus = (typeof EMPLOYEE_STATUS)[number];
