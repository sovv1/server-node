import { Router } from 'express';
import authCtrl from '../controllers/auth.ctrl';

const router = Router();

router.post('/signin', authCtrl.signIn);

export default router;
