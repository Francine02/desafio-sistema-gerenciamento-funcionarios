import { NextFunction, Request, Response } from 'express';

import { EmployeesResponseDTO } from '../dtos/response/response-employees.dto';
import { employeeServices } from '../employee.module';

export const FindEmployeesByCompanyController = async (
  req: Request<{ id: string }>,
  res: Response<EmployeesResponseDTO>,
  next: NextFunction
) => {
  try {
    const response = await employeeServices.findByCompanyId.execute(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
