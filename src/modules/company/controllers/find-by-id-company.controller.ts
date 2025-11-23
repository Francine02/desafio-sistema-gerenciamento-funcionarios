import { NextFunction, Request, Response } from 'express';

import { companyServices } from '../company.module';
import { CompanyResponseDTO } from '../dtos/response/response-company.dto';

export const FindByIdCompanyController = async (
  req: Request<{ id: string }>,
  res: Response<CompanyResponseDTO>,
  next: NextFunction
) => {
  try {
    const response = await companyServices.findById.execute(req.params.id);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
