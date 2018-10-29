import { Router } from 'express';
const router = Router();

router.get('/', function(req, res, next) {
    res.json({ hello: "hello" });
});

export default router;
