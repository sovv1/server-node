import { Router } from 'express';
import authCtrl from '../controllers/auth.ctrl';

const router = Router();

router.post('/user', userCtrl.addUser);
router.get('/users', userCtrl.getAllUsers);
router.get('/user/:id', userCtrl.getUserByID);

export default router;
