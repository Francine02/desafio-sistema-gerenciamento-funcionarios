import mongoose, { Document } from 'mongoose';

import { EmployeeStatus } from '../constants/employee-status.constant';

export interface Employee {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  position: string;
  status: EmployeeStatus;
  termination_date?: Date;
  password: string;
  company_id: mongoose.Types.ObjectId;
  created_at: Date;
}

export type EmployeeDocument = Employee & Document;
