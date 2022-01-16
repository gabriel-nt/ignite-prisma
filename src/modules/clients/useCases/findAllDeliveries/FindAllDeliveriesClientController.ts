import { Request, Response } from 'express';
import { FindAllDeliveriesClientUseCase } from './FindAllDeliveriesClientUseCase';

export class FindAllDeliveriesClientController {
  async handle(request: Request, response: Response) {
    const { id_client } = request;

    const findAllDeliveriesUseCase = new FindAllDeliveriesClientUseCase();

    const result = await findAllDeliveriesUseCase.execute(id_client);

    return response.json(result);
  }
}
