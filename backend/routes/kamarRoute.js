import express from 'express';
import {
    getKamar,
    getKamarById,
    saveKamar,
    updateKamar,
    deleteKamar,
    getKamarByKos
} from "../controllers/kamarController.js";

const router = express.Router();

router.get('/kamar', getKamar);
router.get('/kamar/:id', getKamarById);
router.post('/kamar/:kosId', saveKamar);
router.get('/kamarByKos/:kosId', getKamarByKos);
router.patch('/kamar/:kosId/:id', updateKamar);
router.delete('/kamar/:kosId/:id', deleteKamar);

export default router;