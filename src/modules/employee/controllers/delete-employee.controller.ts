import { NextFunction, Request, Response } from 'express';

import { employeeServices } from '../employee.module';

export const DeleteEmployeeController = async (
  req: Request<{ id: string }>,
  res: Response<void>,
  next: NextFunction
) => {
  try {
    await employeeServices.delete.execute(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
