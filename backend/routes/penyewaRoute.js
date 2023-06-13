import express from "express";
import {
    getPenyewa,
    getPenyewaById,
    savePenyewa,
    updatePenyewa,
    deletePenyewa
} from "../controllers/penyewaController.js";


const router = express.Router();

router.get("/penyewa", getPenyewa);
router.get("/penyewa/:id", getPenyewaById);
router.post("/penyewa", savePenyewa);
router.patch("/penyewa/:id", updatePenyewa);
router.delete("/penyewa/:id", deletePenyewa);

export default router;