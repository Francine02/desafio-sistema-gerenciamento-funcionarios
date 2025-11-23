/* eslint-disable @typescript-eslint/no-empty-object-type */
import { NextFunction, Request, Response } from 'express';

import { CreateEmployeeDTO } from '../dtos/request/create-employee.dto';
import { EmployeeResponseDTO } from '../dtos/response/response-employee.dto';
import { employeeServices } from '../employee.module';

export const CreateEmployeeController = async (
  req: Request<{}, {}, CreateEmployeeDTO>,
  res: Response<EmployeeResponseDTO>,
  next: NextFunction
) => {
  try {
    const response = await employeeServices.create.execute(req.body);
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};
