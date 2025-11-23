import { NextFunction, Request, Response } from 'express';

import { companyServices } from '../company.module';

export const DeleteCompanyController = async (
  req: Request<{ id: string }>,
  res: Response<void>,
  next: NextFunction
) => {
  try {
    await companyServices.delete.execute(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
