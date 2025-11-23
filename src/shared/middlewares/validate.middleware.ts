import { NextFunction, Request, Response } from 'express';
import { ZodError, ZodSchema } from 'zod';

export const validateWithZod =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);

      return next();
    } catch (error) {
      if (error instanceof ZodError)
        return res
          .status(422)
          .json({ status: 'error', message: 'Validation Error!', issues: error.format() });
      return next(error);
    }
  };
