/* eslint-disable @typescript-eslint/no-empty-object-type */
import { NextFunction, Request, Response } from 'express';

import { companyServices } from '../company.module';
import { UpdateCompanyDTO } from '../dtos/request/update-company.dto';
import { CompanyResponseDTO } from '../dtos/response/response-company.dto';

export const UpdateCompanyController = async (
  req: Request<{ id: string }, {}, UpdateCompanyDTO>,
  res: Response<CompanyResponseDTO>,
  next: NextFunction
) => {
  try {
    const response = await companyServices.update.execute(req.params.id, req.body);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
