import express from 'express';
import {
    getKamar,
    getKamarById,
    saveKamar,
    updateKamar,
    deleteKamar
} from "../controllers/kamarController.js";

const router = express.Router();

router.get('/kamar', getKamar);
router.get('/kamar/:id', getKamarById);
router.post('/kamar', saveKamar);
router.patch('/kamar/:id', updateKamar);
router.delete('/kamar/:id', deleteKamar);

export default router;