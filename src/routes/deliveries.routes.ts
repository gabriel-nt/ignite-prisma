import { Router } from 'express';

import { ensureAuthenticateClient } from '../middlewares/ensureAuthenticateClient';
import { ensureAuthenticateDeliveryman } from '../middlewares/ensureAuthenticateDeliveryman';
import { UpdateEndDateController } from '../modules/deliveries/useCases/updateEndDate/UpdateEndDateController';
import { CreateDeliveryController } from '../modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { FindAllAvailableController } from '../modules/deliveries/useCases/findAllAvailable/FindAllAvailableController';
import { UpdateDeliverymanController } from '../modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController';

const deliveriesRoutes = Router();

const updateEndDateController = new UpdateEndDateController();
const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();

deliveriesRoutes.get(
  '/',
  ensureAuthenticateDeliveryman,
  findAllAvailableController.handle
);

deliveriesRoutes.post(
  '/',
  ensureAuthenticateClient,
  createDeliveryController.handle
);

deliveriesRoutes.put(
  '/updateDeliveryman/:id',
  ensureAuthenticateDeliveryman,
  updateDeliverymanController.handle
);

deliveriesRoutes.put(
  '/delivery/updateEndDate/:id',
  ensureAuthenticateDeliveryman,
  updateEndDateController.handle
);

export { deliveriesRoutes };
