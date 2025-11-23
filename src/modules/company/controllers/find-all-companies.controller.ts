import { NextFunction, Request, Response } from 'express';

import { companyServices } from '../company.module';
import { CompaniesResponseDTO } from '../dtos/response/response-companies.dto';

export const FindAllCompaniesController = async (
  _: Request<unknown>,
  res: Response<CompaniesResponseDTO>,
  next: NextFunction
) => {
  try {
    const response = await companyServices.findAll.execute();
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
