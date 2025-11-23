/* eslint-disable @typescript-eslint/no-empty-object-type */
import { NextFunction, Request, Response } from 'express';

import { UpdateEmployeeDTO } from '../dtos/request/update-employee.dto';
import { EmployeeResponseDTO } from '../dtos/response/response-employee.dto';
import { employeeServices } from '../employee.module';

export const UpdateEmployeeController = async (
  req: Request<{ id: string }, {}, UpdateEmployeeDTO>,
  res: Response<EmployeeResponseDTO>,
  next: NextFunction
) => {
  try {
    const response = await employeeServices.update.execute(req.params.id, req.body);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
