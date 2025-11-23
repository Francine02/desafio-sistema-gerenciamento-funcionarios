/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { MongoServerError } from 'mongodb';
import { ZodError } from 'zod';

import { BadRequestError } from '../errors/bad-request.error';
import { EntityAlreadyExistsError } from '../errors/entity-already-exists.error';
import { NotFoundError } from '../errors/not-found.error';

export const errorHandler = (err: unknown, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ZodError) {
    return res.status(422).json({
      status: 'error',
      message: err.message,
      issues: err.issues,
    });
  }

  if (err instanceof BadRequestError) {
    return res.status(err.status).json({
      status: 'error',
      message: err.message,
    });
  }

  if (err instanceof EntityAlreadyExistsError) {
    return res.status(err.status).json({
      status: 'error',
      message: err.message,
    });
  }

  if (err instanceof NotFoundError) {
    return res.status(err.status).json({
      status: 'error',
      message: err.message,
    });
  }

  if (err instanceof MongoServerError && err.code === 11000) {
    return res.status(409).json({
      status: 'error',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
};
