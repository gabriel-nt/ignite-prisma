import { Router } from 'express';

import { clientsRoutes } from './clients.routes';
import { deliveriesRoutes } from './deliveries.routes';
import { deliverymenRoutes } from './deliverymen.routes';

const routes = Router();

routes.use('/client', clientsRoutes);
routes.use('/delivery', deliverymenRoutes);
routes.use('/deliveryman', deliveriesRoutes);

export { routes };
