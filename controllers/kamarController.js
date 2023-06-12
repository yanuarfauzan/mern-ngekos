import Kamar from '../models/Kamar.js';


export const getKamar = async (req, res) => {
    try {
        const kamar = await Kamar.find();
        res.json(kamar);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const getKamarById = async (req, res) => {
    try {
        const kamar = await Kamar.findById(req.params.id);
        res.json(kamar);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const saveKamar = async (req, res) => {
    const kamar = new Kamar(req.body);
    try {
        const savedKamar = await kamar.save();
        res.status(201).json(savedKamar);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const updateKamar = async (req, res) => {
    try {
        const updatedKamar = await Kamar.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updatedKamar);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const deleteKamar = async (req, res) => {
    try {
        const deletedKamar = await Kamar.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedKamar);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}