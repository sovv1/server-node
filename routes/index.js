import { Router } from 'express';
import usersRoutes from './user.route';
import mainRoutes from './main.route';
import authRoutes from './auth.route';
const router = Router();

const routes = [authRoutes, usersRoutes, mainRoutes];

router.use('/', routes);

export default router;
