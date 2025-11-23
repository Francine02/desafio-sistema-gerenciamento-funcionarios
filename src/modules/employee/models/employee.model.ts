import { model, Schema } from 'mongoose';

import { EMPLOYEE_STATUS } from '../constants/employee-status.constant';
import { EmployeeDocument } from './employee.interface';

const employeeMongooseSchema = new Schema<EmployeeDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    position: { type: String, required: true },
    status: { type: String, enum: EMPLOYEE_STATUS, default: 'ACTIVE' },
    termination_date: { type: Date, required: false },
    password: { type: String, required: true },
    company_id: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: false,
    },
  }
);

export const EmployeeModel = model<EmployeeDocument>('Employee', employeeMongooseSchema);
