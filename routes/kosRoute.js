import express from "express";
import {
    getKos,
    getKosById,
    saveKos,
    updateKos,
    deleteKos
} from "../controllers/kosController.js";

const router = express.Router();

router.get('/kos', getKos);
router.get('/kos/:id', getKosById);
router.post('/kos', saveKos);
router.patch('/kos/:id', updateKos);
router.delete('/kos/:id', deleteKos);

export default router;