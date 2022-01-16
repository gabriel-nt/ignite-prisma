import { Router } from 'express';
import { ensureAuthenticateClient } from '../middlewares/ensureAuthenticateClient';

import { AuthenticateClientController } from '../modules/account/useCases/authenticateClient/AuthenticateClientController';
import { CreateClientController } from '../modules/clients/useCases/createClient/CreateClientController';
import { FindAllDeliveriesClientController } from '../modules/clients/useCases/findAllDeliveries/FindAllDeliveriesClientController';

const clientsRoutes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const findAllDeliveriesController = new FindAllDeliveriesClientController();

clientsRoutes.get(
  '/deliveries',
  ensureAuthenticateClient,
  findAllDeliveriesController.handle
);
clientsRoutes.post('/', createClientController.handle);
clientsRoutes.post('/authenticate', authenticateClientController.handle);

export { clientsRoutes };
