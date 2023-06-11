import Penyewa from "../models/Penyewa.js";

export const getPenyewa = async (req, res) => {
    try {
        const penyewa = await Penyewa.find();
        res.json(penyewa);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

export const getPenyewaById = async (req, res) => {
    try {
        const penyewa = await Penyewa.findById(req.params.id);
        res.json(penyewa);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

export const savePenyewa = async (req, res) => {
    const penyewa = new Penyewa(req.body);
    try {
        const insertedPenyewa = await penyewa.save();
        res.status(201).json(insertedPenyewa);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

export const updatePenyewa = async (req, res) => {
    try {
        const updatedPenyewa = await Penyewa.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedPenyewa);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

export const deletePenyewa = async (req, res) => {
    try {
        const deletedPenyewa = await Penyewa.deleteOne({_id: req.params.id});
        res.status(200).json(deletedPenyewa);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
}