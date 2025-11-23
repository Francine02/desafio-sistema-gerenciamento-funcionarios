import { NextFunction, Request, Response } from 'express';

import { EmployeesResponseDTO } from '../dtos/response/response-employees.dto';
import { employeeServices } from '../employee.module';

export const FindAllEmployeesController = async (
  _: Request<unknown>,
  res: Response<EmployeesResponseDTO>,
  next: NextFunction
) => {
  try {
    const response = await employeeServices.findAll.execute();
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
