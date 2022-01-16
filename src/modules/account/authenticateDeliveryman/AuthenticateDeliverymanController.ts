import { Request, Response } from 'express';
import { AuthenticateDeliverymanUseCase } from './AuthenticateDeliverymanUseCase';

export class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const authenticateDeliveryman = new AuthenticateDeliverymanUseCase();

    const result = await authenticateDeliveryman.execute({
      password,
      username,
    });

    return response.json(result);
  }
}
