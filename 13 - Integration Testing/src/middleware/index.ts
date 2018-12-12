import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('New app...');
    throw new Error('Anirri...');
});

export default router;