import mongoose from 'mongoose';

import { Employee } from '../../models/employee.interface';

export type EmployeeResponseDTO = Omit<
  Employee,
  '_id' | 'password' | 'created_at' | 'termination_date'
> & {
  employee_id: mongoose.Types.ObjectId;
  created_at: string;
  termination_date?: string;
};
