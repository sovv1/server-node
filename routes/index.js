import { Router } from 'express';
import usersRoutes from './user.route';
import mainRoutes from './main.route';
const router = Router();

const routes = [usersRoutes, mainRoutes];
router.use('/', routes);

export default router;
