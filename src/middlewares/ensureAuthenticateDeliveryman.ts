import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateDeliveryman(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: 'Token missing',
    });
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: id_deliveryman } = verify(
      token,
      'eaf5df7b88a013748ceb2f2161f90171'
    ) as IPayload;

    request.id_deliveryman = id_deliveryman;

    return next();
  } catch (error) {
    return response.status(401).json({
      message: 'Invalid token',
    });
  }
}
