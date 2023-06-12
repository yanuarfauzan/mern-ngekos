import express from 'express';
import {
    getKontrak,
    getKontrakById,
    saveKontrak,
    updateKontrak,
    deleteKontrak
} from '../controllers/kontrakController.js';

const router = express.Router();

router.get('/kontrak', getKontrak);
router.get('/kontrak/:id', getKontrakById);
router.post('/kontrak', saveKontrak);
router.patch('/kontrak/:id', updateKontrak);
router.delete('/kontrak/:id', deleteKontrak);

export default router;