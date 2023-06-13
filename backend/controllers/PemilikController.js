import Pemilik from "../models/Pemilik.js";

export const getPemilik = async (req, res) => {
    try {
        const pemilik = await Pemilik.find();
        res.json(pemilik);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getPemilikById = async (req, res) => {
    try {
        const pemilik = await Pemilik.findById(req.params.id);
        res.json(pemilik);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const savePemilik = async (req, res) => {
    const pemilik = new Pemilik(req.body);
    try {
        const insertedPemilik = await pemilik.save();
        res.status(201).json(insertedPemilik);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const updatePemilik = async (req, res) => {
    try {
        const updatedPemilik = await Pemilik.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updatedPemilik);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const deletePemilik = async (req, res) => {
    try {
        const deletedPemilik = await Pemilik.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedPemilik);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}