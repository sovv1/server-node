import { Router } from 'express';
import { withAuth } from "../helpers/authHelper";
import userCtrl from '../controllers/user.ctrl';
const router = Router();

const checkIfAuthenticated = withAuth();

router.post('/user', userCtrl.addUser);
router.get('/users', checkIfAuthenticated, userCtrl.getAllUsers);
router.get('/user/:id', checkIfAuthenticated, userCtrl.getUserByID);

export default router;
