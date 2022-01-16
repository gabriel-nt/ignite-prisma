import { Router } from 'express';
import { ensureAuthenticateDeliveryman } from '../middlewares/ensureAuthenticateDeliveryman';
import { AuthenticateDeliverymanController } from '../modules/account/useCases/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateDeliverymanController } from '../modules/deliverymen/useCases/createDeliveryman/CreateDeliverymanController';
import { FindAllDeliveriesDeliverymanController } from '../modules/deliverymen/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController';

const deliverymenRoutes = Router();

const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const findAllDeliveriesDeliverymanController =
  new FindAllDeliveriesDeliverymanController();

const createDeliverymanController = new CreateDeliverymanController();

deliverymenRoutes.post(';', createDeliverymanController.handle);

deliverymenRoutes.post(
  '/authenticate',
  authenticateDeliverymanController.handle
);

deliverymenRoutes.get(
  '/deliveries',
  ensureAuthenticateDeliveryman,
  findAllDeliveriesDeliverymanController.handle
);

export { deliverymenRoutes };
