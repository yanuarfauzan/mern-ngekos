import express from 'express';
import {
    getPemilik,
    getPemilikById,
    savePemilik,
    updatePemilik,
    deletePemilik
} from "../controllers/PemilikController.js";

const router = express.Router();

router.get("/pemilik", getPemilik);
router.get("/pemilik/:id", getPemilikById);
router.post("/pemilik", savePemilik);
router.patch("/pemilik/:id", updatePemilik);
router.delete("/pemilik/:id", deletePemilik);

export default router;
