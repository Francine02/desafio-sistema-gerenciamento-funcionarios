/* eslint-disable @typescript-eslint/no-empty-object-type */
import { NextFunction, Request, Response } from 'express';

import { companyServices } from '../company.module';
import { CreateCompanyDTO } from '../dtos/request/create-company.dto';
import { CompanyResponseDTO } from '../dtos/response/response-company.dto';

export const CreateCompanyController = async (
  req: Request<{}, {}, CreateCompanyDTO>,
  res: Response<CompanyResponseDTO>,
  next: NextFunction
) => {
  try {
    const response = await companyServices.create.execute(req.body);
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};
